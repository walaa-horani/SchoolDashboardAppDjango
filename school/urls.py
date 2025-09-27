from django.urls import path, include
from .views import ProgramViewSet,ProfileViewSet, SubjectViewSet, UserViewSet, EventViewSet, FeedbackViewSet, TeacherViewSet, TestimonialViewSet, StudentViewSet, GradeViewSet, ReviewViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()


router.register("programs",ProgramViewSet)
router.register("events", EventViewSet)
router.register("teachers", TeacherViewSet)
router.register("testimonials", TestimonialViewSet)
router.register("students", StudentViewSet)
router.register("grades", GradeViewSet)
router.register("reviews", ReviewViewSet)
router.register("feedbacks", FeedbackViewSet)
router.register("users",UserViewSet)
router.register("subjects",SubjectViewSet)
router.register("profiles", ProfileViewSet)
urlpatterns = [
    path('', include(router.urls)),
]