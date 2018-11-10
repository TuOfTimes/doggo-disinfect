from clarifai.rest import ClarifaiApp
from clarifai.rest import Image as ClImage

API_KEY = "ab2d666b14614d2db6c1041798af08ee"


app = ClarifaiApp( api_key = API_KEY )

model = app.models.get('nsfw-v1.0')

image = ClImage( url='https://samples.clarifai.com/nsfw.jpg' )

print model.predict([image])
