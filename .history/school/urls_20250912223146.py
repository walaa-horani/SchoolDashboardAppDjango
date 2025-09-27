from django.urls import path
from .views import ProgramViewSet, EventViewSet, TeacherViewSet, TestimonialViewSet, StudentViewSet, GradeViewSet, ReviewViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()


router.register("programs",ProgramViewSet)
router.register("events", EventViewSet)
router.register("teachers", TeacherViewSet)
router.register("testimonials", TestimonialViewSet)
router.register("students", StudentViewSet)
router.register("grades", GradeViewSet)
router.register("reviews", ReviewViewSet)