from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('blog/', views.blog, name="blog"),
    path('store/', views.store, name="store"),
    path('contact_us/', views.contact, name="contact"),
    path('store/<str:slug>',views.product, name="product"),
    
]