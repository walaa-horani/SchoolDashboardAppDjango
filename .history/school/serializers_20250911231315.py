from rest_framework import serializers
from .models import Program, Event, Teacher, Testimonial, Student, Grade, Review


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = "__all__"



class ProgramSerializer(serializers.ModelSerializer):
    teacher = TeacherSerializer(read_only=True)

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



class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = "__all__"


class StudentSerializer(serializers.ModelSerializer):

    grades = GradeSerializer(many=True,read_only=True)


    class Meta:
        model = Student
        fields = ["id", "user", "grade_level", "grades"]







