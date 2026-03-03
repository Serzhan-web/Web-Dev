import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class About {
  info = {
    name: 'Album Browser',
    version: '1.0.0',
    description: 'A simple album browser application built with Angular.',
  }
}
