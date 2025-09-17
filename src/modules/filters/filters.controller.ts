import { Controller, Get, Param } from '@nestjs/common';
import { FiltersService } from './filters.service';

@Controller('filters')
export class FiltersController {
  constructor(private readonly filtersService: FiltersService) {}

  @Get('periods/:idTabela')
  async getFiltersPeriods(@Param('idTabela') idTabela: string) {
    return await this.filtersService.getFiltersPeriods(idTabela);
  }

  @Get('metadados/:idTabela')
  async getFiltersMetadados(@Param('idTabela') idTabela: string) {
    return await this.filtersService.getFiltersMetadados(idTabela);
  }
}
