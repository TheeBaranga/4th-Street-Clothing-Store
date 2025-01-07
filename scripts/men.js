'use strict';
{
    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');

    open.addEventListener('click', () => {
        overlay.classList.add('show');  
        open.classList.add('hide');     
    });

    close.addEventListener('click', () => {
        overlay.classList.remove('show');  
        open.classList.remove('hide');     
    });
}
function scrollLeft() {
    const container = document.querySelector('.bag-image');
    container.scrollBy({
        top: 0,
        left: -600, // Adjust this value to change the scroll distance
        behavior: 'smooth'
    });
}

function scrollRight() {
    const container = document.querySelector('.bag-image');
    container.scrollBy({
        top: 0,
        left: 600, // Adjust this value to change the scroll distance
        behavior: 'smooth'
    });
}
function handleEnter(event) {
    if (event.key === 'Enter') {
        searchFunction();
    }
}
function searchFunction() {
    const searchQuery = document.querySelector('.search-bar').value;
    console.log('Searching for:', searchQuery);

}

window.onscroll = function() {
    updateProgressBar();
  };
  
  function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
    document.querySelector(".progress-bar").style.width = scrollPercentage + "%";
  }
  

  document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const openButton = document.getElementById("open");
    const closeButton = document.getElementById("closeButton");

  
    openButton.addEventListener("click", function() {
        overlay.style.display = "flex";
    });

   
    closeButton.addEventListener("click", function() {
        overlay.style.display = "none";
    });
});
document.getElementById('open').addEventListener('click', function() {
    document.querySelector('.overlay').classList.add('show');
    document.getElementById('open').classList.add('hide');
});

document.getElementById('close').addEventListener('click', function() {
    document.querySelector('.overlay').classList.remove('show');
    document.getElementById('open').classList.remove('hide');
});


  


