import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  URL_API_IBGE_METADADOS,
  URL_API_IBGE_PERIODS,
} from 'src/shared/consts/url-api-ibge';
import { TabelaSidraDetalhe } from 'src/shared/types/metadados';
import { PeriodsResponse } from 'src/shared/types/periods';

@Injectable()
export class FiltersService {
  async getFiltersPeriods(idTabela: string): Promise<PeriodsResponse> {
    const { data } = await axios.get<PeriodsResponse>(
      URL_API_IBGE_PERIODS(idTabela),
    );

    return data;
  }

  async getFiltersMetadados(idTabela: string): Promise<TabelaSidraDetalhe> {
    const { data } = await axios.get<TabelaSidraDetalhe>(
      URL_API_IBGE_METADADOS(idTabela),
    );

    return data;
  }
}
