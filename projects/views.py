from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from projects.models import ProjectPost
from projects.serializers import ProjectPostSerializer

class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

@csrf_exempt
def projectpost_list(request):
    if request.method == 'GET':
        projectposts = ProjectPost.objects.all()
        serializer = ProjectPostSerializer(projectposts, many=True)
        return JSONResponse(serializer.data)
