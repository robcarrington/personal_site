from django.db import models

class ProjectPost(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    body = models.TextField()
    link_url = models.CharField(max_length=100)
    img_url = models.CharField(max_length=100)

    class Meta:
        ordering = ('created',)
