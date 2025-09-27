from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets,permissions

from .serializers import  (
    ProgramSerializer, EventSerializer, TeacherSerializer,
    TestimonialSerializer, StudentSerializer, GradeSerializer, ReviewSerializer
)

from .models import  Program, Event, Teacher, Testimonial, Student, Grade, Review
# Create your views here.



