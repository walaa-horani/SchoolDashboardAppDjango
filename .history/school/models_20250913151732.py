from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Teacher(models.Model):
    name = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    image = models.ImageField(upload_to="teachers/")


    def __str__(self):
        return self.name

class Program(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to="programs/")
    seats = models.IntegerField(default=30)
    lessons = models.IntegerField(default=40)
    hours = models.IntegerField(default=60)
    teacher = models.ForeignKey(Teacher,on_delete=models.SET_NULL,null=True, blank=True)

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
    



    

class Student(models.Model):
    name = models.CharField(max_length=100,null=True, blank=True)
    subject = models.CharField(max_length=100,null=True, blank=True)
    image = models.ImageField(upload_to="students/",null=True, blank=True)
    grade_level = models.CharField(max_length=50,null=True, blank=True)


    def __str__(self):
        return self.name
    
class Grade(models.Model):
    student = models.ForeignKey(Student,  on_delete=models.CASCADE, related_name="grades")
    mark = models.DecimalField(max_digits=5, decimal_places=2)


    def __str__(self):
        return f"{self.student.user.username}  - {self.mark}"
    

class ReviewUser(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.name

class Review(models.Model):
    user = models.ForeignKey(ReviewUser, on_delete=models.CASCADE,null=True, blank=True)
    program = models.ForeignKey(Program, on_delete=models.CASCADE,related_name="reviews")
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"{self.user.username}  - {self.program.title}"




class TestimonialUser(models.Model):
    name = models.CharField(max_length=100,null=True, blank=True)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.name



class Testimonial(models.Model):
    user = models.ForeignKey(TestimonialUser, on_delete=models.SET_NULL, null=True, blank=True)


    

    
    comment = models.TextField()
    rating = models.IntegerField(default=5)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.client_name} ({self.rating})"











