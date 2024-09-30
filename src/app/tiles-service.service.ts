import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TilesServiceService {
    private apiUrl = 'https://vaneddsolutions.com/drupal/api/tiles'; // Replace with your API endpoint

    constructor(private http: HttpClient) { }

    fetchTiles(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}
