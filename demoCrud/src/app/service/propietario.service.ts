import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Propietario } from '../model/propietario';
@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  url: string = "http://localhost:5000/propietarios"
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Propietario[]>(this.url);
  }
}
