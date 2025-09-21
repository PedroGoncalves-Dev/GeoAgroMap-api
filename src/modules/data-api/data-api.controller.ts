import { Body, Controller, Post } from '@nestjs/common';
import { DataApiService } from './data-api.service';
import { TransformedDataResponse } from 'src/shared/types/transformed-data-response';
import { PayloadFilterForResult } from 'src/shared/types/payload-filter-for-result';
import { GeoJSONResponse } from 'src/shared/types/data-kwitwear';

export interface DataApiResponse {
  dataResult: TransformedDataResponse[];
  dataKnitwear: GeoJSONResponse;
}
@Controller('data-api')
export class DataApiController {
  constructor(private readonly dataApiService: DataApiService) {}
  @Post()
  async getDataApi(
    @Body() body: PayloadFilterForResult,
  ): Promise<DataApiResponse> {
    return await this.dataApiService.getDataApi(body);
  }
}
