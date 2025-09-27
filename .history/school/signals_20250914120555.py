from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Profile, Student

@receiver(post_save, sender=Profile)
def create_student_if_needed(sender, instance, created, **kwargs):
    # إذا صار الدور طالب
    if instance.role == "student":
        Student.objects.get_or_create(profile=instance, defaults={
            "name": instance.user.username
        })
