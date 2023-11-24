from django.db import models


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=128)
    description = models.TextField()
    department = models.CharField(max_length=128, null=True)
    price = models.DecimalField(default=0, max_digits=8, decimal_places=2)
    image_url = models.CharField(max_length=128)
    hovered_image_url = models.CharField(max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)
