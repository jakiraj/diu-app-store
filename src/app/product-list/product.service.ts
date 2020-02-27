import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(
    private _httpClient: HttpClient
  ) {}

  getProducts() {
    return this._httpClient.get('http://203.190.11.227:8040/rest/v1/product-list/category?categoryId=1')
  }
}
