from django.http import HttpRequest, HttpResponse
from django.shortcuts import redirect
from django.urls import reverse


def index(request: HttpRequest) -> HttpResponse:
    return redirect("api/")
