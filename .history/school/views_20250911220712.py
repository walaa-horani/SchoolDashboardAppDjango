from django.shortcuts import render
from django.http import HttpResponse

def hello_world(request):
    return HttpResponse("Hello Students! 🎉 This is our first API view.")

# Create your views here.
