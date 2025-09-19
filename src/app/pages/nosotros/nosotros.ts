import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss'
})
export class Nosotros {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Nosotros | Tienda');
    this.metaService.updateTag({
      name: 'description',
      content: 'Conoce a nuestro equipo y la historia de la tienda.'
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: '/assets/og-nosotros.png'
    });
  }

}
