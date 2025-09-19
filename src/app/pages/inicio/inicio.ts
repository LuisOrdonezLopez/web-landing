import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule, RouterModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Inicio | Tienda');
    this.metaService.updateTag({
      name: 'description',
      content: 'Bienvenido a Tienda: todo tipo de productos en general.'
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: '../../../../public/logo_karinas.png'
    });
  }

}
