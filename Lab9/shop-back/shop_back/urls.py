from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def home(request):
    return JsonResponse({
        "message": "✅ Django API для Online Store работает!",
        "endpoints": {
            "products": "/api/products/",
            "categories": "/api/categories/",
            "docs": "Проверь все эндпоинты из лабораторной"
        }
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', home),
]