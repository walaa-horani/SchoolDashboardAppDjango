from rest_framework import serializers
from .models import Program, Profile, Event, Teacher, FeedbackUser, Testimonial, Student, Grade, Review
from django.contrib.auth.models import User

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = "__all__"



class ProgramSerializer(serializers.ModelSerializer):
    teacher = TeacherSerializer(read_only=True)   
   
    teacher_name  = serializers.PrimaryKeyRelatedField(queryset= Teacher.objects.all(),  source="teacher", write_only=True)

    class Meta:
        model = Program
        fields = "__all__" 


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"   


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = "__all__"

        



class FeedbackUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackUser
        fields = "__all__"



class  UserSerializer(serializers.ModelSerializer):
    class Meta:
        model =User
        fields =["id","username", "password"]

        extra_kwargs = {"password": {
            "write_only":True,
            "required":True
        }}


class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = "__all__"


class StudentSerializer(serializers.ModelSerializer):

    grades = GradeSerializer(many=True,read_only=True)


    class Meta:
        model = Student
        fields = ["id", "user", "grade_level", "grades"]


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'user', 'role']


class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    

    class Meta:
        model = Review
        fields = "__all__"









