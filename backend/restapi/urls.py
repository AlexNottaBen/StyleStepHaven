from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import ProductViewSet, PurchaseView, UserRetrieveView, UserCreateView

app_name = "restapi"

router = DefaultRouter()
router.register(prefix="products", viewset=ProductViewSet)
router.register(prefix="products", viewset=ProductViewSet)

urlpatterns = [
    path('', include(router.urls), name='api_root'),
    path('user/create/', UserCreateView.as_view({'post': 'create'}), name="user_create"),
    path('user/<int:pk>/', UserRetrieveView.as_view({'get': 'retrieve'}), name="user_retrieve"),
    path('submit-order/', PurchaseView.as_view(), name="submit_order"),
]
