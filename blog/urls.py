from django.conf.urls import url
from blog import views

urlpatterns = [
    url(r'^list/$', views.blogpost_list),
    url(r'^post/(?P<pk>[a-zA-Z0-9-]+)', views.blogpost_detail),
]
