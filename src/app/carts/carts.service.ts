import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private _httpClient:HttpClient) { }

  CreateNewCart(Model:any){
    return this._httpClient.post(environment.baseApi + "carts",Model)
  }
}
