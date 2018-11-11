/*
    Once a page is loaded, we need to grab all images with a certain tag beyond some
    sureness threshold and replace their img source with the Unsplash image source:
    <img src="https://source.unsplash.com/1600x900/?corgi,samoyed,dog" alt="">
    We can allow users to specif
*/

const request = new XMLHttpRequest();

compare_image("https://media.wired.com/photos/5a55457ef41e4c2cd9ee6cb5/master/w_1164,c_limit/Doggo-TopArt-104685145.jpg");

function compare_image(image_file){

    var jason = JSON.stringify({ "inputs": [
        {
          "data": {
            "image": {
              "url":image_file
            }
          }
        }
      ]
    });
    const http = new XMLHttpRequest();
    const url="https://api.clarifai.com/v2/models/aaa03c23b3724a16a56b629203edc62c/versions/aa7f35c01e0642fda5cf400f543e7c40/outputs";
    http.open("POST", url, true);

    http.setRequestHeader("Authorization", "Key dd29486bdc2a466493a5dc9fdaa52f37");
    http.setRequestHeader("Content-Type", "application/json");

    http.onreadystatechange = function () {
        if ( this.status == 200 && this.readyState==4 ){
            console.log(http.responseText)
        }
    }
    console.log(image_file);
    http.send(jason);

}
