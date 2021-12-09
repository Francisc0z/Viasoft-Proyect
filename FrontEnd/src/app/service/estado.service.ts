import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  url='http://localhost:8080/estado/';
  constructor(private httpClient: HttpClient) { }
  public lista():Observable<Estado[]>{
    return this.httpClient.get<Estado[]>(this.url+'lista');
  }
}
