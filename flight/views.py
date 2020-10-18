from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'flight/index.html')

def search(request):
    return render(request, 'flight/search.html')

#def search(request):
#    from = request.GET.get('from')
#    to = request.GET.get('to')