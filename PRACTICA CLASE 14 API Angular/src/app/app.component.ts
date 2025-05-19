import { Component, inject } from '@angular/core';
import { NgForOf } from '@angular/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  photos: Photo[] = [];
  private photoService = inject(PhotoService);

  ngOnInit() {
    this.photoService.getPhotos().subscribe(data => {
      this.photos = data;
    });
  }
}

