from django.conf.urls import url
from projects import views

urlpatterns = [
    url(r'^list/$', views.projectpost_list),
]
