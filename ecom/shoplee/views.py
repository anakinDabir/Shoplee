from django.shortcuts import render
from .models import *

# Create your views here.

def home(request):
    aboutUser = User.objects.filter(is_superuser=True)
    context = {"about":aboutUser}
    return render(request, 'shoplee/home.html', context)

def blog(request):
    context = {}
    return render(request, 'shoplee/blog.html', context)

def store(request):
    category = Category.objects.all()
    product = Product.objects.all()
    context = {"Categories":category, "Products":product}
    return render(request, 'shoplee/store.html', context)

def contact(request):
    context = {}
    return render(request, 'shoplee/contact.html', context)

def product(request,slug):
    product = Product.objects.get(slug=slug)
    review = product.product_reviews.all()
    context = {"product":product, "reviews":review}
    return render(request, 'shoplee/prod.html', context)