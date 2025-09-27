from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets,permissions

from .serializers import  (
    ProgramSerializer, EventSerializer, TeacherSerializer,
    TestimonialSerializer, StudentSerializer, GradeSerializer, ReviewSerializer
)

from .models import  Program, Event, Teacher, Testimonial, Student, Grade, Review
# Create your views here.


class ProgramViewSet(viewsets.ModelViewSet):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer


class EventViewSet(viewsets.ModelViewSet):

    queryset = Event.objects.all()
    serializer_class = EventSerializer



class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer




class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all().order_by("-created_at")
    serializer_class = TestimonialSerializer
    permission_classes  = [permissions.IsAuthenticatedOrReadOnly]




class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes  = [permissions.IsAuthenticated]



class GradeViewSet(viewsets.ModelViewSet):
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer
    permission_classes  = [permissions.IsAuthenticated]    







    




