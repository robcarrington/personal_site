from django.db import models

class BlogPost(models.Model):
    url = models.CharField(primary_key=True, max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100)
    body = models.TextField()
    color = models.CharField(default="#7a42f4", max_length=100)
    link_url = models.CharField(max_length=100, blank=True)
    link_text = models.CharField(max_length=100, blank=True)

    class Meta:
        ordering = ('created',)
