from clarifai.rest import ClarifaiApp
from clarifai.rest import Image as ClImage
import sys

API_KEY = "ab2d666b14614d2db6c1041798af08ee"

def main():

    app = ClarifaiApp( api_key = API_KEY )

    model = app.models.get('nsfw-v1.0')

    image = sys.argv[1]
    print image
    response = model.predict_by_url(url=image)

    sfw =  response["outputs"][0]["data"]["concepts"][0]
    nsfw = response["outputs"][0]["data"]["concepts"][1]
    print "sfw value " + str(sfw["value"])
    print "nsfw value " + str(nsfw["value"])

if __name__ == "__main__":
    main()
