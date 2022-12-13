import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

    getCoordinates() {
        return this.http.get('/assets/coordinates.json', { responseType: 'json', reportProgress: true });
    }
}