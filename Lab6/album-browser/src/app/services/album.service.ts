import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

    // 1. Get all albums
    getAlbums(): Observable<Album[]> {
      return this.http.get<Album[]>(`${this.baseUrl}/albums`);
    }

    // 2. Get one album to ID
    getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  // 3. Get photos of album
  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  // 4. Update album
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }

  // 5. Delete album
  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/albums/${id}`);
  }
  }