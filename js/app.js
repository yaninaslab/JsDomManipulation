// Selecting the first h2 title and replacing it with a new value
var first_h2_tag = document.querySelector('h2');
first_h2_tag.innerText = "This is a new place!";

// Selecting all h2 titles and changing their default color
var all_h2_tags = document.querySelectorAll('h2');
for(var i=0; i < all_h2_tags.length; i++) {
    all_h2_tags[i]['style']['color'] = "darkblue";
}
// Selecting image by id and replacing it with text
var images = document.getElementById("img1");
images['innerText'] = 'The image is gone';
images.style.textAlign = "center";


// Selecting elements by class and adding background to titles
var images_titles = document.getElementsByClassName('title');
for (var i=0; i < images_titles.length; i++) {
    images_titles[i].style.background = "lightblue";
}
// Selecting elements by their tags and adding border to images
var images = document.getElementsByTagName('img');
for (var i=0; i < images.length; i++) {
    images[i].style.border = "5px solid lightblue";
}
// Creating h1 element but in fact it's not acting as an h1 tag...
var h = document.createElement('h1');
// Adding text to that element
var text = document.createTextNode("Have a nice trip!");
document.body.appendChild(text);
// Align center text element
document.body.style.textAlign = "center";
document.body.style.fontSize = "large";

// Removing text element if this code is active
//document.body.removeChild(text);

// Just tried using these commands and manipulating them but I can't see that much has been changed
var header = document.getElementById('gallery-container');
header.classList.add('title');

var header = document.getElementById('gallery-container');
header.classList.remove('elements');

var header = document.getElementById('gallery-container');
var classStatus = header.classList.toggle('elements');