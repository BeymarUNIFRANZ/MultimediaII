// src/app/dog.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DogResponse } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  // Usamos un endpoint que siempre devuelve un array
  private apiUrl = 'https://dog.ceo/api/breeds/image/random/10'; // 10 imágenes

  constructor(private http: HttpClient) { }

  getDogs(): Observable<DogResponse> {
    return this.http.get<DogResponse>(this.apiUrl);
  }
}