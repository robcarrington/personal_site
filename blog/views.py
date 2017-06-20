from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer, StaticHTMLRenderer
from blog.models import BlogPost
from blog.serializers import BlogPostSerializer

class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

@csrf_exempt
def blogpost_list(request):
    if request.method == 'GET':
        blogposts = BlogPost.objects.all()
        serializer = BlogPostSerializer(blogposts, many=True)
        return JSONResponse(serializer.data)

@csrf_exempt
def blogpost_detail(request, pk):
    try:
        blogpost = BlogPost.objects.get(pk=pk)
    except BlogPost.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = BlogPostSerializer(blogpost)
        return JSONResponse(serializer.data)

