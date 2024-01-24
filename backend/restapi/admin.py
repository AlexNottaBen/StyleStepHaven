from django.contrib import admin

from .models import Product, ProductImage, ProductAttribute


class ProductImageInline(admin.StackedInline):
    model = ProductImage


class ProductAttributeInline(admin.StackedInline):
    model = ProductAttribute


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = (ProductAttributeInline, ProductImageInline)
