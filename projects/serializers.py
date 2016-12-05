from rest_framework import serializers
from projects.models import ProjectPost


class ProjectPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectPost
        fields = ('id', 'title', 'body', 'link_url', 'img_url')
