import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor, MatCardModule, MatButtonModule],
  templateUrl: './product.html',
  styleUrls: ['./product.scss']
})
export class Product {
  constructor(private titleService: Title, private metaService: Meta) {}
 
  product = [
    { id: 1, name: 'Producto 1', desc: 'Descripción breve del producto 01' },
    { id: 2, name: 'Producto 2', desc: 'Descripción breve del producto 02' },
    { id: 3, name: 'Producto 3', desc: 'Descripción breve del producto 03' }
  ];

  ngOnInit() {
    this.titleService.setTitle('Productos | Tienda');
    this.metaService.updateTag({
      name: 'description',
      content: 'Descubre nuestros productos de moda y de calidad.'
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: '/assets/og-productos.png'
    });
  }
}