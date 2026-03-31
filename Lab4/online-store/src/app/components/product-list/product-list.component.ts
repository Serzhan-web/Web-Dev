import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <div class="product-grid">
      <app-product-card *ngFor="let p of products" [product]="p"></app-product-card>
    </div>
  `,
  styles: [`
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      padding: 20px;
      justify-content: center;
    }
  `]
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'iPhone 16 Pro', price: 650000, rating: 5.0, description: 'Новейший iPhone с титановым корпусом.', link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-chernyi-123887632/', image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/83559338770462.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h41/h98/83559338770462.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h1b/83559338704926.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h92/h77/83559338639390.jpg'] },
    { id: 2, name: 'PlayStation 5 Slim', price: 260000, rating: 4.9, description: 'Консоль с 1ТБ памяти.', link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-115183307/', image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h59/84485333155870.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h02/h59/84485333155870.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h9a/84485333221406.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h61/h63/84485333286942.jpg'] },
    { id: 3, name: 'AirPods Pro 2', price: 115000, rating: 4.8, description: 'Наушники с шумоподавлением.', link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113370340/', image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h24/h09/84108189696030.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h71/h67/84108189761566.jpg'] },
    { id: 4, name: 'MacBook Air 13 M3', price: 580000, rating: 5.0, description: 'Тонкий ноутбук на чипе M3.', link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-3-8-gb-ssd-256-gb-macos-mrym3-seryi-117757913/', image: 'https://resources.cdn-kaspi.kz/img/m/p/h01/h6c/85536486031390.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h01/h6c/85536486031390.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h0b/h83/85536486096926.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h4b/h6c/85536486162462.jpg'] },
    { id: 5, name: 'Samsung S24 Ultra', price: 520000, rating: 4.7, description: 'Смартфон со стилусом.', link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-256-gb-seryi-116043556/', image: 'https://resources.cdn-kaspi.kz/img/m/p/h8c/h12/84961016119326.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h8c/h12/84961016119326.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h55/h41/84961016250398.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h42/84961016381470.jpg'] },
    { id: 6, name: 'Dyson Airwrap', price: 285000, rating: 4.9, description: 'Мультистайлер для волос.', link: 'https://kaspi.kz/shop/p/dyson-airwrap-complete-long-nikel-mednyi-104925828/', image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/hb7/64380963323934.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h42/hb7/64380963323934.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h90/h7a/64380965945374.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h11/h0d/64380968566814.jpg'] },
    { id: 7, name: 'iPad Pro M4', price: 540000, rating: 5.0, description: 'Планшет с OLED дисплеем.', link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-256-gb-serebristyi-119641470/', image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h78/86036104445982.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h59/h78/86036104445982.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h74/h73/86036104511518.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h13/h3d/86036104577054.jpg'] },
    { id: 8, name: 'Xiaomi Mi Band 8', price: 15000, rating: 4.8, description: 'Фитнес-браслет.', link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-8-chernyi-110196144/', image: 'https://resources.cdn-kaspi.kz/img/m/p/h7b/h79/80337424089118.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h7b/h79/80337424089118.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h61/h99/80337424154654.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h8d/80337424220190.jpg'] },
    { id: 9, name: 'Marshall Major IV', price: 65000, rating: 4.9, description: 'Беспроводные наушники.', link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-101034371/', image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/hc1/64010419306526.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/hd6/hc1/64010419306526.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h87/h89/64010423107614.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/hc6/h14/64010427039774.jpg'] },
    { id: 10, name: 'LEGO Star Wars', price: 85000, rating: 5.0, description: 'Конструктор Сокол Тысячелетия.', link: 'https://kaspi.kz/shop/p/lego-star-wars-sokol-tysjacheletija-75257-100062602/', image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h87/63901638295582.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h57/h87/63901638295582.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/hc7/hc2/63901640523806.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/hf0/h77/63901642883102.jpg'] },
  ];
}