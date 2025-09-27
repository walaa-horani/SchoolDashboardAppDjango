from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Program(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to="programs/")
    seats = models.IntegerField(default=30)
    lessons = models.IntegerField(default=40)
    hours = models.IntegerField(default=60)

    def __str__(self):
        return self.title
    


class Event(models.Model):

    title = models.CharField(max_length=300)
    description = models.TextField()
    date = models.DateField()
    time_from = models.TimeField()
    time_to = models.TimeField()
    location = models.CharField(max_length=200)
    image = models.ImageField(upload_to="events/")


    def __str__(self):
        return self.title
    


class Teacher(models.Model):
    name = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    image = models.ImageField(upload_to="teachers/")


    def __str__(self):
        return self.name
    

class Student(models.Model):
    user= models.OneToOneField(User, on_delete=models.CASCADE)
    grade_level = models.CharField(max_length=50)


    def __str__(self):
        return self.user.username







