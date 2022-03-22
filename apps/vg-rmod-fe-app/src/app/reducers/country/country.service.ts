import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable} from "rxjs";
import { CountryEntity } from "@vg-rmod-training/shared-models";
import { environment } from "@vg-rmod-training/vg-rmod-fe-app/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    readonly url = environment.api;

    constructor(private readonly httpClient: HttpClient) {}
    
    getCountries(): Observable<CountryEntity[]> {
        return this.httpClient.get<CountryEntity[]>(this.url + '/country-codes');
    }
}
