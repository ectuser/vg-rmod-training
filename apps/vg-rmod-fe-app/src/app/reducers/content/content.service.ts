import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ContentText } from "@vg-rmod-training/shared-models";
import { environment } from "@vg-rmod-training/vg-rmod-fe-app/environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContentService {
    private readonly url = environment.api;

    constructor(private readonly http: HttpClient) {}

    loadContentByPageId(pageId: string): Observable<ContentText> {
        return this.http.get<ContentText>(this.url + '/content/' + pageId);
    }
}
