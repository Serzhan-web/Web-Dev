from django.core.management.base import BaseCommand
from api.models import Category, Product


class Command(BaseCommand):
    help = 'Seed database with initial data from Angular frontend'

    def handle(self, *args, **kwargs):
        Product.objects.all().delete()
        Category.objects.all().delete()

        smartphones = Category.objects.create(name='Smartphones')
        laptops = Category.objects.create(name='Laptops')
        audio = Category.objects.create(name='Audio')
        gaming = Category.objects.create(name='Gaming')

        products = [
            # Smartphones
            Product(name='iPhone 16 Pro', price=650000, description='Titanium design.', count=10, is_active=True, rating=5.0, image='/assets/images/Smartphones/iphone-16-pro.webp', link='https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-chernyi-123887632/', category=smartphones),
            Product(name='Samsung S24 Ultra', price=520000, description='AI Phone.', count=8, is_active=True, rating=4.7, image='/assets/images/Smartphones/samsung-s24.webp', link='https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-256-gb-seryi-116043556/', category=smartphones),
            Product(name='Xiaomi 14', price=350000, description='Leica lens.', count=15, is_active=True, rating=4.6, image='/assets/images/Smartphones/xiaomi-14.webp', link='https://kaspi.kz/shop/p/xiaomi-14-12-gb-512-gb-chernyi-117234641/', category=smartphones),
            Product(name='Google Pixel 9', price=450000, description='Pure Android.', count=6, is_active=True, rating=4.8, image='/assets/images/Smartphones/pixel-9.webp', link='https://kaspi.kz/shop/p/google-pixel-9-pro-128gb-chernyi-122971380/', category=smartphones),
            Product(name='Nothing Phone 2', price=280000, description='Glyph interface.', count=12, is_active=True, rating=4.5, image='/assets/images/Smartphones/nothing-2.webp', link='https://kaspi.kz/shop/p/nothing-phone-2-12-gb-256-gb-seryi-112028825/', category=smartphones),
            # Laptops
            Product(name='MacBook Air M3', price=580000, description='Powerful M3 chip.', count=5, is_active=True, rating=5.0, image='/assets/images/Laptops/macbook-air.webp', link='https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-3-8-gb-ssd-256-gb-macos-mrym3-seryi-117757913/', category=laptops),
            Product(name='ASUS ROG Zephyrus', price=850000, description='Gaming beast.', count=3, is_active=True, rating=4.9, image='/assets/images/Laptops/asus-rog.webp', link='https://kaspi.kz/shop/p/asus-rog-zephyrus-g16-gu605mv-qr047-90nr0ir2-m002p0-seryi-117282858/', category=laptops),
            Product(name='Dell XPS 13', price=720000, description='Infinite display.', count=4, is_active=True, rating=4.7, image='/assets/images/Laptops/dell-xps.webp', link='https://kaspi.kz/shop/p/dell-xps-13-9340-13-4-16-gb-ssd-512-gb-win-11-pro-9340-7798-serebristyi-119934301/', category=laptops),
            Product(name='Lenovo Legion 5', price=540000, description='Best for work and play.', count=7, is_active=True, rating=4.8, image='/assets/images/Laptops/lenovo-legion.webp', link='https://kaspi.kz/shop/p/lenovo-legion-5-15iah7h-82rb00e0us-seryi-108130836/', category=laptops),
            Product(name='HP Spectre x360', price=680000, description='Convertible laptop.', count=4, is_active=True, rating=4.6, image='/assets/images/Laptops/hp-spectre.webp', link='https://kaspi.kz/shop/p/hp-spectre-x360-14-eu0006ua-9r291ea-chernyi-116815340/', category=laptops),
            # Audio
            Product(name='AirPods Pro 2', price=115000, description='ANC Noise cancellation.', count=20, is_active=True, rating=4.9, image='/assets/images/sound/airpods-pro.webp', link='https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113370340/', category=audio),
            Product(name='Sony WH-1000XM5', price=160000, description='King of ANC.', count=9, is_active=True, rating=5.0, image='/assets/images/sound/sony-xm5.webp', link='https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105221406/', category=audio),
            Product(name='Marshall Major IV', price=65000, description='Iconic sound.', count=11, is_active=True, rating=4.8, image='/assets/images/sound/marshall-major.webp', link='https://kaspi.kz/shop/p/marshall-major-iv-chernyi-101034371/', category=audio),
            Product(name='Bose QuietComfort', price=145000, description='Pure comfort.', count=6, is_active=True, rating=4.7, image='/assets/images/sound/bose-qc.webp', link='https://kaspi.kz/shop/p/bose-quietcomfort-45-chernyi-102717056/', category=audio),
            Product(name='Galaxy Buds 3 Pro', price=95000, description='Samsung ecosystem.', count=13, is_active=True, rating=4.5, image='/assets/images/sound/buds-3-pro.webp', link='https://kaspi.kz/shop/p/samsung-galaxy-buds3-pro-serebristyi-121175640/', category=audio),
            # Gaming
            Product(name='PlayStation 5 Slim', price=260000, description='Best console.', count=5, is_active=True, rating=5.0, image='/assets/images/gaming/ps5-slim.webp', link='https://kaspi.kz/shop/p/sony-playstation-5-slim-115183307/', category=gaming),
            Product(name='Xbox Series X', price=245000, description='Game Pass power.', count=4, is_active=True, rating=4.9, image='/assets/images/gaming/xbox-x.webp', link='https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100720456/', category=gaming),
            Product(name='Nintendo Switch OLED', price=165000, description='Gaming on the go.', count=8, is_active=True, rating=4.8, image='/assets/images/gaming/nintendo-oled.png', link='https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102717804/', category=gaming),
            Product(name='Steam Deck OLED', price=320000, description='Portable PC.', count=3, is_active=True, rating=4.9, image='/assets/images/gaming/steam-deck.webp', link='https://kaspi.kz/shop/p/valve-steam-deck-oled-512-gb-114841951/', category=gaming),
            Product(name='LEGO Star Wars', price=85000, description='Millennium Falcon.', count=10, is_active=True, rating=5.0, image='/assets/images/gaming/lego-falcon.webp', link='https://kaspi.kz/shop/p/lego-star-wars-sokol-tysjacheletija-75257-100062602/', category=gaming),
        ]

        Product.objects.bulk_create(products)
        self.stdout.write(self.style.SUCCESS('✅ Database seeded with 20 products and 4 categories!'))
