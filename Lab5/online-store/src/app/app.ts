import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Category, Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  categories: Category[];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  get filteredProducts(): Product[] {
    if (!this.selectedCategoryId) return [];
    return this.productService.getProducts().filter(p => p.categoryId === this.selectedCategoryId);
  }
}