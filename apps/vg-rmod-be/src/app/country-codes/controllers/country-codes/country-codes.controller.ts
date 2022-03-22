import { Controller, Get } from '@nestjs/common';
import { CountryCodesService } from '../../services/country-codes/country-codes.service';
import { CountryEntity } from '@vg-rmod-training/shared-models';

@Controller('country-codes')
export class CountryCodesController {
    constructor(private readonly countryCodesService: CountryCodesService) {}

    @Get()
    findAll(): CountryEntity[] {
        return this.countryCodesService.getAll();
    }
}
