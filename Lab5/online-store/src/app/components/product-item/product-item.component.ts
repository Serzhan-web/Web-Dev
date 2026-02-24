import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();
  selectedImgIndex = 0;

  like() {
    this.product.likes++;
  }

  delete() {
    this.remove.emit(this.product.id);
  }

  get shareWA() { return `https://wa.me/?text=${encodeURIComponent(this.product.link)}`; }
  get shareTG() { return `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}`; }
}