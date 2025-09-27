from django.contrib import admin
from .models import Program ,Event , Teacher ,Student ,Grade, Review
# Register your models here.


admin.site.register(Program)

admin.site.register(Event)
admin.site.register(Teacher)
# admin.site.register(Testimonial)
admin.site.register(Student)
admin.site.register(Grade)
admin.site.register(Review)


