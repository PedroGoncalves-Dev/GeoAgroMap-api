import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PayloadFilterForResult } from 'src/shared/types/payload-filter-for-result';
import {
  URL_API_IBGE_DATA,
  URL_API_IBGE_KNITWEAR_DATA,
} from 'src/shared/consts/url-api-ibge';
import { IBGEApiResponse } from 'src/shared/types/ibge-api-response';
import { TransformedDataResponse } from 'src/shared/types/transformed-data-response';
import { GeoJSONResponse } from 'src/shared/types/data-kwitwear';
import { DataApiResponse } from './data-api.controller';

@Injectable()
export class DataApiService {
  async getDataApi(body: PayloadFilterForResult): Promise<DataApiResponse> {
    const {
      idTable,
      variables,
      products,
      periods,
      locality,
      idClassification,
      intraRegion,
    } = body;

    const urlData = URL_API_IBGE_DATA(
      idTable,
      periods,
      variables,
      locality,
      products,
      idClassification,
    );

    const urlKnitwear = URL_API_IBGE_KNITWEAR_DATA(intraRegion);

    const { data } = await axios.get<IBGEApiResponse[]>(urlData);

    const dataTransformed = this.transformIBGEData(data);

    const { data: dataKnitwear } =
      await axios.get<GeoJSONResponse>(urlKnitwear);

    return { dataResult: dataTransformed, dataKnitwear: dataKnitwear };
  }

  private transformIBGEData(
    data: IBGEApiResponse[],
  ): TransformedDataResponse[] {
    return data
      .map((variable): TransformedDataResponse[] => {
        return variable.resultados.map((resultado): TransformedDataResponse => {
          const classificacao = resultado.classificacoes[0];
          const productId = Object.keys(classificacao.categoria)[0];
          const productName = classificacao.categoria[productId];

          return {
            variable: {
              id: variable.id,
              name: variable.variavel,
              unit: variable.unidade,
            },
            product: {
              id: productId,
              name: productName,
            },
            data: resultado.series.map((serie) => ({
              location: {
                id: serie.localidade.id,
                name: serie.localidade.nome,
                level: {
                  id: serie.localidade.nivel.id,
                  name: serie.localidade.nivel.nome,
                },
              },
              values: this.convertStringNumbersToNumbers(serie.serie),
            })),
          };
        });
      })
      .flat();
  }
  private convertStringNumbersToNumbers(
    values: Record<string, string>,
  ): Record<string, string | number> {
    const converted: Record<string, string | number> = {};

    for (const [key, value] of Object.entries(values)) {
      if (value === '...' || value === '-' || value === '') {
        converted[key] = value;
      } else {
        const numValue = parseFloat(value);
        converted[key] = isNaN(numValue) ? value : numValue;
      }
    }

    return converted;
  }
}
