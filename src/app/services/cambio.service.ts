import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movimiento } from '../entities/movimiento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CambioService {
  private url: string = 'http://localhost:8080/api/v1/movimiento';

  constructor(private http: HttpClient) {}

  calcular(movimiento: Movimiento): Observable<Movimiento> {
    return this.http.post<Movimiento>(this.url, movimiento);
  }
}
