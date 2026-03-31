import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent 
{
  @Input() product!: Product;
  selectedImgIndex = 0;

  get shareWA() {
    return `https://wa.me/?text=${encodeURIComponent('Look: ' + this.product.link)}`;
  }

  get shareTG() {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
  }
}