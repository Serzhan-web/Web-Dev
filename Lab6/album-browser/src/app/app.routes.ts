import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Albums } from './albums/albums';
import { AlbumsDetail } from './albums-detail/albums-detail';
import { AlbumsPhotos } from './albums-photos/albums-photos';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'albums', component: Albums },
  { path: 'albums/:id', component: AlbumsDetail },
  { path: 'albums/:id/photos', component: AlbumsPhotos },

  { path: '**', redirectTo: 'home' }
];