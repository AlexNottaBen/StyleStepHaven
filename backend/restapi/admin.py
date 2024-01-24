from django.contrib import admin

from .models import Product, ProductImage, ProductAttribute, ProductSize


class ProductImageInline(admin.StackedInline):
    model = ProductImage


class ProductAttributeInline(admin.StackedInline):
    model = ProductAttribute


class ProductSizeInline(admin.StackedInline):
    model = ProductSize


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = (ProductAttributeInline, ProductImageInline, ProductSizeInline)
