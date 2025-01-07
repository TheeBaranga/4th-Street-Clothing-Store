function scrollLeft() {
    const container = document.querySelector('.scroll-container');
    container.scrollBy({
        left: -200,  
        behavior: 'smooth'
    });
}

function scrollRight() {
    const container = document.querySelector('.scroll-container');
    container.scrollBy({
        left: 200,  
        behavior: 'smooth'
    });
}
