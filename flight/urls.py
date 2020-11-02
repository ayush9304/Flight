from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("searchpage", views.search, name="search"),
    path("bookpage", views.book, name="book"),
    path("paymentpage", views.payment, name="payment"),
    path("query/places/<str:q>", views.query, name="query"),
    path("flight", views.flight, name="flight")
]