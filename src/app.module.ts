import { Module } from '@nestjs/common';
import { FiltersModule } from './modules/filters/filters.module';
import { DataApiModule } from './modules/data-api/data-api.module';

@Module({
  imports: [FiltersModule, DataApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
