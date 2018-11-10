/*
    Once a page is loaded, we need to grab all images with a certain tag beyond some
    sureness threshold and replace their img source with the Unsplash image source:
    <img src="https://source.unsplash.com/1600x900/?corgi,samoyed,dog" alt="">
    We can allow users to specif 
*/
function nodeInsertedCallback(event) {
    console.log(event);
    var imgs = document.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].src = "https://source.unsplash.com/1600x900/?corgi,samoyed,dog";
    }
  };

document.addEventListener('DOMNodeInserted', nodeInsertedCallback);