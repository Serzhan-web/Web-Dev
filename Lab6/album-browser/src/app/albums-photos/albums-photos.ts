import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { AlbumService } from '../services/album.service'; // Импортируем сервис
import { Photo } from '../models/photo.model'; // Импортируем модель

@Component({
  selector: 'app-albums-photos',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule],
  templateUrl: './albums-photos.html',
  styleUrls: ['./albums-photos.css']
})
export class AlbumsPhotos implements OnInit {
  albumId!: number;
  photos: Photo[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id')); 
    
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Ошибка загрузки:', err);
        this.loading = false;
      }
    });
  }
}