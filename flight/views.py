from django.shortcuts import render
from django.http import JsonResponse

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
    return JsonResponse([
        {'code':'ayu','name':'Ayush Kumar'},
        {'code':'liu','name':'Liu Yang'},
        {'code':'vto','name':'Victoria Predetti'},
        {'code':'hol','name':'Hola Hello'},
        {'code':'isk','name':'Ishika Sharma'},
        {'code':'dep','name':'Deepanshu Metha'}
    ], safe=False)