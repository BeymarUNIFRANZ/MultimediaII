// src/app/app.component.ts
import { Component, inject } from '@angular/core';
import { DogService } from './photo.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dogImages: string[] = [];
  private dogService = inject(DogService);

  ngOnInit() {
    this.loadDogs();
  }

  loadDogs() {
    this.dogService.getDogs().subscribe({
      next: (response) => {
        // Aseguramos que siempre trabajamos con un array
        this.dogImages = Array.isArray(response.message) 
          ? response.message 
          : [response.message];
      },
      error: (err) => {
        console.error('Error al cargar imágenes de perros:', err);
      }
    });
  }

  refreshDogs() {
    this.loadDogs();
  }

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://via.placeholder.com/300x300?text=Perro+no+disponible';
  }
}