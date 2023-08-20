import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient:HttpClient) { }
  getProducts(){
    return this._httpClient.get(environment.baseApi + 'products');
  }

  getCategories(){
    return this._httpClient.get(environment.baseApi + 'products/categories');
  }

  getByCategory(key:string){
    return this._httpClient.get(environment.baseApi + 'products/category/' + key);
  }

  getIdProduct(id:any){
    return this._httpClient.get(environment.baseApi + 'products/' + id);
  }
}
