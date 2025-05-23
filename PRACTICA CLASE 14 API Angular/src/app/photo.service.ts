import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'https://picsum.photos/v2/list';

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrl);
  }
}
