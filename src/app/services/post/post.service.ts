import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  enviarFormulario(dados: any) {
    return this.http.post('https://sua-api.com/formulario', dados);
  }
}
