function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}
var button =document.getElementById('read_button')

button.addEventListener('click', function(){
    var card = document.querySelector('.card');
    card.classList.toggle('active');

    if (card.classList.contains('active')){
        return button.textContent = 'Menos';
    }
    button.textContent = 'Saiba Mais';
}
);

document.getElementById("meuLink").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Link clicado, mas o comportamento padrão foi prevenido.");
});

var slideshow = document.querySelector('.slideshow'); 
var images = slideshow.getElementsByTagName('img');
var index = 0;

setInterval(function() {
  images[index].style.display = 'none';
  index = (index + 1) % images.length;
  images[index].style.display = 'inline-block';
}, 3000);
