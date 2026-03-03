import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = 'Home Page';
  description = 'Welcomea to the Album Browser! This is my first Angular application with routing!';
}
