from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import ProductViewSet, PurchaseView

app_name = "restapi"

router = DefaultRouter()
router.register(prefix="products", viewset=ProductViewSet)

urlpatterns = [
    path('', include(router.urls), name='api_root'),
    path('submit-order/', PurchaseView.as_view(), name="submit_order")
]
