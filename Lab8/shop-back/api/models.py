from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name='products'
    )
    # Extra fields for Angular frontend
    rating = models.FloatField(default=0.0)
    image = models.CharField(max_length=500, blank=True, default='')
    link = models.CharField(max_length=500, blank=True, default='')

    def __str__(self):
        return self.name
