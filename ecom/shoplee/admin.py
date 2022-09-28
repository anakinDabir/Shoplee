from django.contrib import admin

# Register your models here.
from .models import *

from django.utils.translation import ugettext_lazy as _

from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model


class UserAdmin(UserAdmin):
    model = User
    list_display = ['email','is_superuser', 'is_verified']
    search_fields = ('email', 'name')
    ordering = ('email',)


    fieldsets = (
      (None, {'fields': ( 'name', 'email','bio', 'is_verified', 'avatar','rank', 'password')}),
      (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser')}),
      (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
        
  )

    add_fieldsets = (
      (None, {
          'classes': ('wide', ),
          'fields': ('name' , 'email', 'password1', 'password2', 'is_verified', 'is_active', 'is_staff', 'is_superuser')
      }),
  )

admin.site.register(User, UserAdmin)

#----------------------------------------
admin.site.register(Category)

class ProductImageAdmin(admin.StackedInline):
    model = ProductImage
class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageAdmin]
    list_display = ['name','brand', 'category', 'discounted_price','ratings', 'virtual']
    prepopulated_fields = {"slug": ("name",)}

admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage)

class PostAdmin(admin.ModelAdmin):
  list_display = ['title', 'writer']
  prepopulated_fields = {"slug": ("title",)}

admin.site.register(Post, PostAdmin)
class ReviewAdmin(admin.ModelAdmin):
  list_display = ['__str__','rating','text' ]
admin.site.register(Review, ReviewAdmin)



