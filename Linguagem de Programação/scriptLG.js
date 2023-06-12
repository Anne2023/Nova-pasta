var slideshow = document.querySelector('.slideshow'); /*imagens*/
var images = slideshow.getElementsByTagName('img');
var index = 0;

setInterval(function() {
  images[index].style.display = 'none';
  index = (index + 1) % images.length;
  images[index].style.display = 'inline-block';
}, 3000);

var slideshow = document.querySelector('.slideshow');/* video*/
var videos = slideshow.getElementsByTagName('video');
var index = 0;

setInterval(function() {
  videos[index].style.display = 'none';
  index = (index + 1) % videos.length;
  videos[index].style.display = 'inline-block';
  videos[index].play();
}, 5000);

