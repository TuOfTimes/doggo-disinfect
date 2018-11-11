/*
    Once a page is loaded, we need to grab all images with a certain tag beyond some
    sureness threshold and replace their img source with the Unsplash image source:
    <img src="https://source.unsplash.com/1600x900/?corgi,samoyed,dog" alt="">
    We can allow users to specif
*/
const app = new Clarifai.App({
 apiKey: 'dd29486bdc2a466493a5dc9fdaa52f37'
});

// predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
  function(response) {
    console.log(response);
  },
  function(err) {
    console.error(err);
  }
);

function nodeInsertedCallback(event) {
    console.log(event);
    var imgs = document.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].src = "https://source.unsplash.com/1600x900/?corgi,samoyed,dog";
    }
  };

document.addEventListener('DOMNodeInserted', nodeInsertedCallback);
