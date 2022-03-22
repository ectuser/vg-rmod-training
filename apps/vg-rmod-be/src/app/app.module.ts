import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryCodesModule } from './country-codes/country-codes.module';

@Module({
  imports: [CountryCodesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
