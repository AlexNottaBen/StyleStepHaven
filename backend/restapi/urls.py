from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import ProductViewSet

app_name = "restapi"

router = DefaultRouter()
router.register(prefix="products", viewset=ProductViewSet)

urlpatterns = [
    path('', include(router.urls))
]