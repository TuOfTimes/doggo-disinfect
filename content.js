/*
    Once a page is loaded, we need to grab all images with a certain tag beyond some
    sureness threshold and replace their img source with the Unsplash image source:
    <img src="https://source.unsplash.com/1600x900/?corgi,samoyed,dog" alt="">
    We can allow users to specif 
*/
window.onload = function() {
    document.body.style.position = 'static';
    document.body.style.overflow = 'visible';
    if (chrome.extension.inIncognitoContext) {
        var modal = document.getElementsByClassName('gip__modal');
        modal[0].parentNode.removeChild(modal[0]);
    }
    else {
        var paywall = document.getElementsByClassName('meter-paywall');
        paywall[0].parentNode.removeChild(paywall[0]);
    }
}