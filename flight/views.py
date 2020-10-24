from django.shortcuts import render

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