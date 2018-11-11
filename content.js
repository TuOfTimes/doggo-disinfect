/*
    Once a page is loaded, we need to grab all images with a certain tag beyond some
    sureness threshold and replace their img source with the Unsplash image source:
    <img src="https://source.unsplash.com/1600x900/?corgi,samoyed,dog" alt="">
    We can allow users to specif 
*/
var filter = ['animal'];
var myArray = ["dog", "samoyed", "corgi", "husky", "shiba"];
var threshold = 0.5;

var observer = new MutationObserver(function(mutations){
    for (var i=0; i < mutations.length; i++){
        for (var j=0; j < mutations[i].addedNodes.length; j++){
            var newNode = mutations[i].addedNodes[j];
            if (newNode.querySelectorAll) {
                Array.prototype.forEach.call(
                    newNode.querySelectorAll("img"), checkNode
                );
            }
        }
    }
});
  
observer.observe(document, {
    childList: true,
    subtree: true,
});

checkNode = function(addedNode) {
    var keywords = {};
    var jason = JSON.stringify({ "inputs": [
        {
          "data": {
            "image": {
              "url":addedNode.src
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
    http.send(jason);

    console.log(addedNode.src);

    http.onreadystatechange = function () {
        if ( this.status == 200 && this.readyState==4 ){
            var data = JSON.parse(this.response);
            data.outputs[0].data.concepts.forEach(function(element){
                if (element.value > threshold) {
                    keywords[element.name] = true
                }
                // keywords[element.name] = element.value
            });
            console.log(keywords);
            console.log(filter);
            console.log(myArray);
            
            filter.some(function(element){
                console.log(element);
                if (keywords[element]) {
                    var rand = myArray[Math.floor(Math.random() * myArray.length)];
                    addedNode.src = "https://source.unsplash.com/featured/?" + rand;
                }
                return keywords[element] === true;
            })
        }
    }    
}
console.log(x)
