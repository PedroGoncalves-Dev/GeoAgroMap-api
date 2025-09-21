import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  URL_API_IBGE_METADADOS,
  URL_API_IBGE_MUNICIPALITIES_BY_UF,
  URL_API_IBGE_PERIODS,
  URL_API_IBGE_REGIONS,
  URL_API_IBGE_UF,
} from 'src/shared/consts/url-api-ibge';
import { TableSidraDetail } from 'src/shared/types/metadados';
import { MunicipalityResponse } from 'src/shared/types/municipalities';
import { PeriodsResponse } from 'src/shared/types/periods';
import { RegionResponse } from 'src/shared/types/regions';
import { UFsResponse } from 'src/shared/types/ufs';

@Injectable()
export class FiltersService {
  async getFiltersPeriods(idTable: string): Promise<PeriodsResponse> {
    const { data } = await axios.get<PeriodsResponse>(
      URL_API_IBGE_PERIODS(idTable),
    );

    return data;
  }

  async getFiltersMetadados(idTable: string): Promise<TableSidraDetail> {
    const { data } = await axios.get<TableSidraDetail>(
      URL_API_IBGE_METADADOS(idTable),
    );

    return data;
  }

  async getFiltersUfs(): Promise<UFsResponse> {
    const { data } = await axios.get<UFsResponse>(URL_API_IBGE_UF);

    return data;
  }

  async getFiltersMunicipalitiesByUf(
    idUF: string,
  ): Promise<MunicipalityResponse> {
    const { data } = await axios.get<MunicipalityResponse>(
      URL_API_IBGE_MUNICIPALITIES_BY_UF(idUF),
    );

    return data;
  }

  async getFiltersRegions(): Promise<RegionResponse> {
    const { data } = await axios.get<RegionResponse>(URL_API_IBGE_REGIONS);

    return data;
  }
}
