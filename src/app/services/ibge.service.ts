import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class IbgeService {
  readonly endpoint = 'https://viacep.com.br/ws/'
 constructor(private http: HttpClient) {}

getAddressByCep(cep:string){
  return this.http.get(`${this.endpoint}/${cep}/json`)
}

}
