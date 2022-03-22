import { Module } from '@nestjs/common';
import { CountryCodesController } from './controllers/country-codes/country-codes.controller';
import { CountryCodesService } from './services/country-codes/country-codes.service';

@Module({
  controllers: [CountryCodesController],
  providers: [CountryCodesService],
})
export class CountryCodesModule {}
