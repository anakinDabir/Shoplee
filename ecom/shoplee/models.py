from django.db import models
# Create your models here.
import uuid
from .managers import UserManager
# Create your models here.
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import AbstractUser
from django.core.validators import MaxValueValidator, MinValueValidator

class User(AbstractUser):
    username = None
    uid = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    email = models.EmailField(unique=True)
    name = models.CharField(max_length = 20, blank=True)
    bio = models.TextField(blank=True, null=True)
    avatar = models.ImageField(null=True, blank=True, default='', upload_to="static/images/users")
    rank = models.CharField(max_length=20, null=True, blank=True)
    is_verified = models.BooleanField(default=False, blank=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = UserManager()

class Category(models.Model):
    name = models.CharField(max_length=20, null=True)
    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    brand = models.CharField(max_length=100, null=True, blank=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    price = models.FloatField(null=True, blank=True)
    discounted_price = models.FloatField(null=True, blank=True)
    desc = models.TextField(null=True, blank=True)
    additional_info = models.TextField(null=True, blank=True)
    virtual = models.BooleanField(default=False, blank=True, null=True)
    slug = models.CharField(max_length=100)
    def __str__(self):
        return self.name

    @property
    def ratings(self):
        review = self.product_reviews.all()
        try:
            rating = int(sum([prod.rating for prod in review]) / len([prod.rating for prod in review]))
        except:
            rating = 0 
        return rating



class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="product_reviews")
    text = models.TextField(null=True)
    rating = models.IntegerField(null=True, default=1, validators=[MaxValueValidator(5), MinValueValidator(1)])
    time = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.user.email + f' ({self.product.name})'




class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="product_images")
    image = models.ImageField(null=True, blank=True, default='',upload_to="static/images")
    def __str__(self):
        return self.product.name

class Post(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    detail = models.TextField(null=True)
    img = models.ImageField(null=True, default='',upload_to="static/images")
    slug = models.CharField(max_length=100)
    date_added = models.DateTimeField(auto_now_add=True)    


    
    
