import { Controller, Get, Param } from '@nestjs/common';
import { FiltersService } from './filters.service';

@Controller('filters')
export class FiltersController {
  constructor(private readonly filtersService: FiltersService) {}

  @Get('periods/:idTable')
  async getFiltersPeriods(@Param('idTable') idTable: string) {
    return await this.filtersService.getFiltersPeriods(idTable);
  }

  @Get('metadados/:idTable')
  async getFiltersMetadados(@Param('idTable') idTable: string) {
    return await this.filtersService.getFiltersMetadados(idTable);
  }

  @Get('ufs')
  async getFiltersUfs() {
    return await this.filtersService.getFiltersUfs();
  }

  @Get('municipalities/:idUF')
  async getFiltersMunicipalitiesByUf(@Param('idUF') idUF: string) {
    return await this.filtersService.getFiltersMunicipalitiesByUf(idUF);
  }

  @Get('regions')
  async getFiltersRegions() {
    return await this.filtersService.getFiltersRegions();
  }
}
