import { Module } from '@nestjs/common';
import { FiltersModule } from './modules/filters/filters.module';

@Module({
  imports: [FiltersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
