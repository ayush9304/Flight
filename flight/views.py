from django.shortcuts import render, HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from datetime import datetime
import calendar
from .models import *

# Create your views here.

def index(request):
    return render(request, 'flight/index.html')

def search(request):
    return render(request, 'flight/search.html')

def book(request):
    return render(request, 'flight/book.html')

def payment(request):
    return render(request, 'flight/payment.html')

#def search(request):
#    from = request.GET.get('from')
#    to = request.GET.get('to')

def query(request, q):
    places = Place.objects.all()
    filters = []
    q = q.lower()
    for place in places:
        if (q in place.city.lower()) or (q in place.airport.lower()) or (q in place.code.lower()) or (q in place.country.lower()):
            filters.append(place)
    return JsonResponse([{'code':place.code, 'city':place.city, 'country': place.country} for place in filters], safe=False)

@csrf_exempt
def flight(request):
    o_place = request.GET.get('Origin')
    d_place = request.GET.get('Destination')
    trip_type = request.GET.get('TripType')
    departdate = request.GET.get('DepartDate')
    depart_date = datetime.strptime(departdate, "%Y-%m-%d")
    if trip_type == '2':
        returndate = request.GET.get('ReturnDate')
        return_date = datetime.strptime(returndate, "%y-%m-%d")
    seat = request.GET.get('SeatType')

    flightday = Week.objects.get(number=depart_date.weekday())
    destination = Place.objects.get(code=d_place.upper())
    origin = Place.objects.get(code=o_place.upper())
    flights = Flight.objects.filter(depart_day=flightday,origin=origin,destination=destination)



    #print(calendar.day_name[depart_date.weekday()])
    return render(request, "flight/search.html", {
        'flights': flights
    })