from typing import Any, Optional
from collections import OrderedDict

from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.filters import SearchFilter
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.mixins import RetrieveModelMixin, CreateModelMixin
from rest_framework.request import Request
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema, OpenApiResponse

from .models import Product, ProductImage
from .serializer import (
    ProductSerializer,
    ProductImageSerializer,
    UserSerializer,
    UserRegisterSerializer
)
from .purchase import Purchase


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [
        SearchFilter,
    ]
    search_fields = ["name", "description"]

    @extend_schema(
        summary="Create product"
    )
    def create(self, *args: Any, **kwargs: Any) -> Response:
        return super().create(*args, **kwargs)

    @extend_schema(
        summary="Get all products"
    )
    def list(self, *args: Any, **kwargs: Any) -> Response:
        return super().list(*args, **kwargs)

    @extend_schema(
        summary="Update products"
    )
    def update(self, *args: Any, **kwargs: Any) -> Response:
        return super().update(*args, **kwargs)

    @extend_schema(
        summary="Partial update products"
    )
    def partial_update(self, *args: Any, **kwargs: Any) -> Response:
        return super().partial_update(*args, **kwargs)

    @extend_schema(
        summary="Destroy product"
    )
    def destroy(self, *args: Any, **kwargs: Any) -> Response:
        return super().destroy(*args, **kwargs)

    @extend_schema(
        summary="Get one product by ID",
        description="Retrieves one **product**, returns 404 if not found!",
        responses={
            200: ProductSerializer,
            404: OpenApiResponse(
                description="Empty response, product by id not found."
            )
        }
    )
    def retrieve(self, *args: Any, **kwargs: Any) -> Response:
        return super().retrieve(*args, **kwargs)



@extend_schema(
    summary="Submit order"
)
class PurchaseView(APIView):

    def post(self, request: Request) -> Response:
        amount: float = 0.0
        products = request.data.get("order")
        for product in products:
            amount += float(product.get("price")) * int(product.get("count"))

        amount_str: str = str(amount)

        integer = int(amount)
        decimal = amount_str[-2:].replace(".", "")
        if len(decimal) == 1:
            decimal += "0"

        print(integer, decimal)

        purchase = Purchase(integer=integer, decimal=decimal)
        url = purchase.get_url()

        return Response({"url": url})


class UserCreateView(GenericViewSet, CreateModelMixin):
    serializer_class = UserRegisterSerializer


class UserRetrieveView(GenericViewSet, RetrieveModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (
        IsAuthenticated,
    )

    def get_object(self) -> Optional[User]:
        # Get object from URL
        user = super().get_object()

        # Get authenticated user
        authenticated_user = self.request.user

        if user.id != authenticated_user.id:
            return None

        return user
