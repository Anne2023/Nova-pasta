
button.addEventListener('click', function(){
    var card = document.querySelector('.card');
    card.classList.toggle('active');

    if (card.classList.contains('active')){
        return button.textContent = 'Menos';
    }
    button.textContent = 'Saiba Mais';
}
);