import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div class="product-grid">
      <ng-container *ngIf="products && products.length; else empty">
        <app-product-item *ngFor="let p of products" [product]="p" (remove)="onRemove($event)"></app-product-item>
      </ng-container>
      <ng-template #empty>
        <p>No products in this category.</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
  `]
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  onRemove(id: number) {
    const index = this.products.findIndex(p => p.id === id);
  }
}