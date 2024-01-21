from django.http import HttpRequest, HttpResponse
from django.shortcuts import redirect
from django.urls import reverse
from drf_spectacular.views import SpectacularAPIView
from drf_spectacular.utils import extend_schema


def index(request: HttpRequest) -> HttpResponse:
    return redirect("api/")


@extend_schema(
    summary="Retrieve Schema"
)
class SchemaAPIView(SpectacularAPIView):
    pass
