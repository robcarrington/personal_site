from django.db import models

class BlogPost(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100)
    body = models.TextField()
    color = models.CharField(default="#7a42f4", max_length=100)

    class Meta:
        ordering = ('created',)
