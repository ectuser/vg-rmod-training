import { Injectable } from '@nestjs/common';
import { CountryEntity } from '@vg-rmod-training/shared-models';

@Injectable()
export class CountryCodesService {
    getAll(): CountryEntity[] {
        return [
            { country: 'US', code: '1' },
            { country: 'PL', code: '48' }
        ];
    }
}
