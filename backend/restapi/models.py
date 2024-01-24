from enum import Enum

from django.contrib.auth.models import User
from django.db import models


def get_product_images_upload_location(instance: "Product", filename: str) -> str:
    return f"products/product_{instance.pk}/images/{filename}"


class Department(Enum):
    MEN = 'Men\'s'
    WOMEN = 'Women\'s'
    KID = 'Kid\'s'


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=128)
    description = models.TextField()
    department = models.CharField(max_length=32, choices=[(tag.value, tag.name) for tag in Department])
    price = models.DecimalField(default=0, max_digits=8, decimal_places=2)
    image = models.ImageField(null=True, blank=True, upload_to=get_product_images_upload_location)
    hovered_image = models.ImageField(null=True, blank=True, upload_to=get_product_images_upload_location)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)


def get_product_gallery_upload_location(instance: "ProductImage", filename: str) -> str:
    return f"products/gallery/{filename}"


class ProductImage(models.Model):
    product = models.ForeignKey(
        to=Product,
        on_delete=models.CASCADE,
        related_name="images",  # source='images' in Serializer
        verbose_name="images",
        null=True,
    )
    image = models.ImageField(
        upload_to=get_product_gallery_upload_location
    )


class ProductAttribute(models.Model):
    product = models.ForeignKey(
        to=Product,
        on_delete=models.CASCADE,
        related_name="attributes",
        verbose_name="attributes",
        null=True,
    )
    name = models.CharField(max_length=128, null=False)
    value = models.CharField(max_length=128, null=False)


class Status(Enum):
    AWAITING_CONFIRMATION = 'AWAITING CONFIRMATION'
    PAYED = 'PAYED'
    CONFIRMED = 'CONFIRMED'
    IN_PROCESSING = 'IN PROCESSING'
    SEND = 'SEND'
    DELIVERED = 'DELIVERED'
    REJECTED = 'REJECTED'
    CANCELLED = 'CANCELLED'
    RETURN = 'RETURN'


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    delivery_address = models.TextField(null=True, blank=True)
    products = models.ManyToManyField(Product, related_name='orders')
    status = models.CharField(max_length=32, choices=[(tag.value, tag.name) for tag in Status])
    ordered_at = models.DateTimeField(auto_now_add=True)

