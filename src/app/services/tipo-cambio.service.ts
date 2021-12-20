import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoCambio } from '../entities/tipo-cambio';

@Injectable({
  providedIn: 'root',
})
export class TipoCambioService {
  private url: string = 'http://localhost:8080/api/v1/tipocambio';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TipoCambio[]> {
    return this.http.get<TipoCambio[]>(this.url);
  }

  get(id: any): Observable<TipoCambio> {
    return this.http.get<TipoCambio>(this.url + '/' + id);
  }

  update(tipocambio: TipoCambio): Observable<TipoCambio> {
    return this.http.post<TipoCambio>(this.url, tipocambio);
  }
}
