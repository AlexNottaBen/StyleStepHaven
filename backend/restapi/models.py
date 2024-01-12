from django.db import models


def get_product_images_upload_location(instance: "Product", filename: str) -> str:
    return f"products/product_{instance.pk}/images/{filename}"


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=128)
    description = models.TextField()
    department = models.CharField(max_length=128, null=True)
    price = models.DecimalField(default=0, max_digits=8, decimal_places=2)
    image = models.ImageField(null=True, blank=True, upload_to=get_product_images_upload_location)
    hovered_image = models.ImageField(null=True, blank=True, upload_to=get_product_images_upload_location)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)
