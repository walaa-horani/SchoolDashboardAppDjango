from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets,permissions
from django.contrib.auth.models import User

from .serializers import  (
    ProgramSerializer, Profile, EventSerializer, TeacherSerializer, FeedbackUserSerializer,
    TestimonialSerializer, ProfileSerializer, UserSerializer, StudentSerializer, GradeSerializer, ReviewSerializer
)

from .models import  Program, Event, Teacher, FeedbackUser, Testimonial, Student, Grade, Review
# Create your views here.

class ProfileViewSet(viewsets.ModelViewSet):
     
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
         user = self.request.user
         return Profile.objects.filter(user=user)
     

class ProgramViewSet(viewsets.ModelViewSet):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer


class EventViewSet(viewsets.ModelViewSet):

    queryset = Event.objects.all()
    serializer_class = EventSerializer



class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = FeedbackUser.objects.all()
    serializer_class = FeedbackUserSerializer


class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all().order_by("-created_at")
    serializer_class = TestimonialSerializer
    permission_classes  = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
            feedback_user, created =FeedbackUser.objects.get_or_create(email = self.request.data.get("email"), defaults={"name":self.request.data.get("name")})
            serializer.save(user=feedback_user)


class UserViewSet(viewsets.ModelViewSet):
     queryset = User.objects.all()
     serializer_class = UserSerializer


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes  = [permissions.IsAuthenticated]



class GradeViewSet(viewsets.ModelViewSet):
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer
    permission_classes  = [permissions.IsAuthenticated]    



class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes  = [permissions.IsAuthenticated]  


    def perform_create(self, serializer):
            serializer.save(user=self.request.user)  
    





    




