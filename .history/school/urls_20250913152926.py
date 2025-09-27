from django.urls import path, include
from .views import ProgramViewSet, EventViewSet, TeacherViewSet, StudentViewSet, GradeViewSet, ReviewViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()


router.register("programs",ProgramViewSet)
router.register("events", EventViewSet)
router.register("teachers", TeacherViewSet)
# router.register("testimonials", TestimonialViewSet)
router.register("students", StudentViewSet)
router.register("grades", GradeViewSet)
router.register("reviews", ReviewViewSet)

urlpatterns = [
    path('', include(router.urls)),
]