import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './albums-detail.html',
  styleUrls: ['./albums-detail.css']
})
export class AlbumsDetail implements OnInit {
  album?: Album;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  saveAlbum(): void {
    if (this.album) {
      this.albumService.updateAlbum(this.album).subscribe((updatedAlbum) => {
        console.log('Saved:', updatedAlbum);
        alert('Album title updated (simulated)!');
      });
    }
  }
}