import { Injectable } from '@angular/core';
import { Category, Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Audio' },
    { id: 4, name: 'Gaming' }
  ];

  products: Product[] = [
    // Category 1: Smartphones
    { id: 1, categoryId: 1, name: 'iPhone 16 Pro', price: 650000, rating: 5.0, likes: 0, description: 'Titanium design.', link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-chernyi-123887632/', image: '/assets/images/Smartphones/iphone-16-pro.webp', images: ['/assets/images/Smartphones/iphone-16-pro.webp', '/assets/images/Smartphones/iphone-16-pro.webp', '/assets/images/Smartphones/iphone-16-pro.webp'] },
    { id: 2, categoryId: 1, name: 'Samsung S24 Ultra', price: 520000, rating: 4.7, likes: 0, description: 'AI Phone.', link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-256-gb-seryi-116043556/', image: '/assets/images/Smartphones/samsung-s24.webp', images: ['/assets/images/Smartphones/samsung-s24.webp', '/assets/images/Smartphones/samsung-s24.webp', '/assets/images/Smartphones/samsung-s24.webp'] },
    { id: 3, categoryId: 1, name: 'Xiaomi 14', price: 350000, rating: 4.6, likes: 0, description: 'Leica lens.', link: 'https://kaspi.kz/shop/p/xiaomi-14-12-gb-512-gb-chernyi-117234641/', image: '/assets/images/Smartphones/xiaomi-14.webp', images: ['/assets/images/Smartphones/xiaomi-14.webp', '/assets/images/Smartphones/xiaomi-14.webp', '/assets/images/Smartphones/xiaomi-14.webp'] },
    { id: 4, categoryId: 1, name: 'Google Pixel 9', price: 450000, rating: 4.8, likes: 0, description: 'Pure Android.', link: 'https://kaspi.kz/shop/p/google-pixel-9-pro-128gb-chernyi-122971380/', image: '/assets/images/Smartphones/pixel-9.webp', images: ['/assets/images/Smartphones/pixel-9.webp', '/assets/images/Smartphones/pixel-9.webp', '/assets/images/Smartphones/pixel-9.webp'] },
    { id: 5, categoryId: 1, name: 'Nothing Phone 2', price: 280000, rating: 4.5, likes: 0, description: 'Glyph interface.', link: 'https://kaspi.kz/shop/p/nothing-phone-2-12-gb-256-gb-seryi-112028825/', image: '/assets/images/Smartphones/nothing-2.webp', images: ['/assets/images/Smartphones/nothing-2.webp', '/assets/images/Smartphones/nothing-2.webp', '/assets/images/Smartphones/nothing-2.webp'] },

    // Category 2: Laptops
    { id: 6, categoryId: 2, name: 'MacBook Air M3', price: 580000, rating: 5.0, likes: 0, description: 'Powerful M3 chip.', link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-3-8-gb-ssd-256-gb-macos-mrym3-seryi-117757913/', image: '/assets/images/Laptops/macbook-air.webp', images: ['/assets/images/Laptops/macbook-air.webp', '/assets/images/Laptops/macbook-air.webp', '/assets/images/Laptops/macbook-air.webp'] },
    { id: 7, categoryId: 2, name: 'ASUS ROG Zephyrus', price: 850000, rating: 4.9, likes: 0, description: 'Gaming beast.', link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g16-gu605mv-qr047-90nr0ir2-m002p0-seryi-117282858/', image: '/assets/images/Laptops/asus-rog.webp', images: ['/assets/images/Laptops/asus-rog.webp', '/assets/images/Laptops/asus-rog.webp', '/assets/images/Laptops/asus-rog.webp'] },
    { id: 8, categoryId: 2, name: 'Dell XPS 13', price: 720000, rating: 4.7, likes: 0, description: 'Infinite display.', link: 'https://kaspi.kz/shop/p/dell-xps-13-9340-13-4-16-gb-ssd-512-gb-win-11-pro-9340-7798-serebristyi-119934301/', image: '/assets/images/Laptops/dell-xps.webp', images: ['/assets/images/Laptops/dell-xps.webp', '/assets/images/Laptops/dell-xps.webp', '/assets/images/Laptops/dell-xps.webp'] },
    { id: 9, categoryId: 2, name: 'Lenovo Legion 5', price: 540000, rating: 4.8, likes: 0, description: 'Best for work and play.', link: 'https://kaspi.kz/shop/p/lenovo-legion-5-15iah7h-82rb00e0us-seryi-108130836/', image: '/assets/images/Laptops/lenovo-legion.webp', images: ['/assets/images/Laptops/lenovo-legion.webp', '/assets/images/Laptops/lenovo-legion.webp', '/assets/images/Laptops/lenovo-legion.webp'] },
    { id: 10, categoryId: 2, name: 'HP Spectre x360', price: 680000, rating: 4.6, likes: 0, description: 'Convertible laptop.', link: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-eu0006ua-9r291ea-chernyi-116815340/', image: 'src/assets/images/Laptops/hp-spectre.webp', images: ['/assets/images/Laptops/hp-spectre.webp', '/assets/images/Laptops/hp-spectre.webp', '/assets/images/Laptops/hp-spectre.webp'] },

    // Category 3: Audio
    { id: 11, categoryId: 3, name: 'AirPods Pro 2', price: 115000, rating: 4.9, likes: 0, description: 'ANC Noise cancellation.', link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113370340/', image: '/assets/images/sound/airpods-pro.webp', images: ['/assets/images/sound/airpods-pro.webp', '/assets/images/sound/airpods-pro.webp', '/assets/images/sound/airpods-pro.webp'] },
    { id: 12, categoryId: 3, name: 'Sony WH-1000XM5', price: 160000, rating: 5.0, likes: 0, description: 'King of ANC.', link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105221406/', image: '/assets/images/sound/sony-xm5.webp', images: ['/assets/images/sound/sony-xm5.webp', '/assets/images/sound/sony-xm5.webp', '/assets/images/sound/sony-xm5.webp'] },
    { id: 13, categoryId: 3, name: 'Marshall Major IV', price: 65000, rating: 4.8, likes: 0, description: 'Iconic sound.', link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-101034371/', image: '/assets/images/sound/marshall-major.webp', images: ['/assets/images/sound/marshall-major.webp', '/assets/images/sound/marshall-major.webp', '/assets/images/sound/marshall-major.webp'] },
    { id: 14, categoryId: 3, name: 'Bose QuietComfort', price: 145000, rating: 4.7, likes: 0, description: 'Pure comfort.', link: 'https://kaspi.kz/shop/p/bose-quietcomfort-45-chernyi-102717056/', image: '/assets/images/sound/bose-qc.webp', images: ['/assets/images/sound/bose-qc.webp', '/assets/images/sound/bose-qc.webp', '/assets/images/sound/bose-qc.webp'] },
    { id: 15, categoryId: 3, name: 'Galaxy Buds 3 Pro', price: 95000, rating: 4.5, likes: 0, description: 'Samsung ecosystem.', link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds3-pro-serebristyi-121175640/', image: '/assets/images/sound/buds-3-pro.webp', images: ['/assets/images/sound/buds-3-pro.webp', '/assets/images/sound/buds-3-pro.webp', '/assets/images/sound/buds-3-pro.webp'] },

    // Category 4: Gaming
    { id: 16, categoryId: 4, name: 'PlayStation 5 Slim', price: 260000, rating: 5.0, likes: 0, description: 'Best console.', link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-115183307/', image: 'src/assets/images/gaming/ps5-slim.webp', images: ['/assets/images/gaming/ps5-slim.webp', '/assets/images/gaming/ps5-slim.webp', '/assets/images/gaming/ps5-slim.webp'] },
    { id: 17, categoryId: 4, name: 'Xbox Series X', price: 245000, rating: 4.9, likes: 0, description: 'Game Pass power.', link: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100720456/', image: 'src/assets/images/gaming/xbox-x.webp', images: ['/assets/images/gaming/xbox-x.webp', '/assets/images/gaming/xbox-x.webp', '/assets/images/gaming/xbox-x.webp'] },
    { id: 18, categoryId: 4, name: 'Nintendo Switch OLED', price: 165000, rating: 4.8, likes: 0, description: 'Gaming on the go.', link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102717804/', image: 'src/assets/images/gaming/nintendo-oled.png', images: ['/assets/images/gaming/nintendo-oled.webp', '/assets/images/gaming/nintendo-oled.webp', '/assets/images/gaming/nintendo-oled.webp'] },
    { id: 19, categoryId: 4, name: 'Steam Deck OLED', price: 320000, rating: 4.9, likes: 0, description: 'Portable PC.', link: 'https://kaspi.kz/shop/p/valve-steam-deck-oled-512-gb-114841951/', image: 'src/assets/images/gaming/steam-deck.webp', images: ['/assets/images/gaming/steam-deck.webp', '/assets/images/gaming/steam-deck.webp', '/assets/images/gaming/steam-deck.webp'] },
    { id: 20, categoryId: 4, name: 'LEGO Star Wars', price: 85000, rating: 5.0, likes: 0, description: 'Millennium Falcon.', link: 'https://kaspi.kz/shop/p/lego-star-wars-sokol-tysjacheletija-75257-100062602/', image: 'src/assets/images/gaming/lego-falcon.webp', images: ['/assets/images/gaming/lego-falcon.webp', '/assets/images/gaming/lego-falcon.webp', '/assets/images/gaming/lego-falcon.webp'] },
  ];

  getCategories(): Category[] { return this.categories; }
  getProducts(): Product[] { return this.products; }
}