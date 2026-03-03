import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';
import { catchError, timeout } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class Albums implements OnInit {
  albums: Album[] = [];
  loading = true;
  error = false;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums()
      .pipe(
        timeout(10000),
        catchError(err => {
          console.error('Error loading albums:', err);
          this.error = true;
          this.loading = false;
          return of([]);
        })
      )
      .subscribe(data => {
        if (!this.error) {
          this.albums = data;
          this.loading = false;
        }
      });
  }

  deleteAlbum(id: number): void {
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums = this.albums.filter(a => a.id !== id);
          alert('The album is deleted (simulated)!');
        },
        error: (err) => console.error('Error deleting album:', err)
      });
    }
  }
}