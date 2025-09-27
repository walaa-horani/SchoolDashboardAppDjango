from rest_framework import serializers
from .models  import Program, Profile, Subject, Event, Teacher, FeedbackUser, Testimonial, Student, Grade, Review
from django.contrib.auth.models import User

from rest_framework.authtoken.views import Token


class FeedbackUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackUser
        fields = ["id", "name", "email"]
        
class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = "__all__"

class ReviewSerializer(serializers.ModelSerializer):
    user = FeedbackUserSerializer(read_only=True)
    

    class Meta:
        model = Review
        fields = "__all__"

class ProgramSerializer(serializers.ModelSerializer):
    teacher = TeacherSerializer(read_only=True)   
   
    teacher_name  = serializers.PrimaryKeyRelatedField(queryset= Teacher.objects.all(),  source="teacher", write_only=True)
    reviews = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Program
        fields = "__all__" 


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"   







class TestimonialSerializer(serializers.ModelSerializer):
    user = FeedbackUserSerializer(read_only=True)

    class Meta:
        model = Testimonial
        fields = "__all__"

        






class  UserSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()
    class Meta:
        model =User
        fields =["id", "username", "first_name", "last_name", "email", "password","token"]

        extra_kwargs = {"password": {
            "write_only":True,
            "required":True
        }}

    def get_token(self, obj):
        token, _ = Token.objects.get_or_create(user=obj)
        return token.key


    def create (self, validated_data)  :
        user =    User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        Profile.objects.create(user=user)
        return user


class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = "__all__"


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
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












