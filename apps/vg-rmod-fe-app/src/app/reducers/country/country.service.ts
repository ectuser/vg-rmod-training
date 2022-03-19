import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { CountryEntity } from "./country.models";

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    constructor(private readonly httpClient: HttpClient) {}
    
    getCountries(): Observable<CountryEntity[]> {
        return of([
            { country: 'US', code: '1' },
            { country: 'PL', code: '48' }]
        );
    }
}
