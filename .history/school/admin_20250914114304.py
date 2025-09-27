from django.contrib import admin
from .models import Program ,Event , Profile , Teacher ,Student ,Grade, Review, Testimonial, FeedbackUser
# Register your models here.


admin.site.register(Program)
admin.site.register(Event)
admin.site.register(FeedbackUser)
admin.site.register(FeedbackUser)
admin.site.register(Teacher)
admin.site.register(Profile)
admin.site.register(Student)
admin.site.register(Grade)
admin.site.register(Review)


