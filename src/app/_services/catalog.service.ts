import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CatalogService {

    constructor(private http: HttpClient) {
    }

    getProducts(params){
      return this.http.get<any>(`/artworks`, { params: params })
    }

}
