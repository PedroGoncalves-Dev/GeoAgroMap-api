import { Module } from '@nestjs/common';
import { DataApiService } from './data-api.service';
import { DataApiController } from './data-api.controller';
@Module({
  controllers: [DataApiController],
  providers: [DataApiService],
  exports: [],
})
export class DataApiModule {}
