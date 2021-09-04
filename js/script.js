// Preloader
const preloader = document.querySelector('.preloader');

window.onload = () => {
  setTimeout(() => {
    preloader.classList.remove('preloader_active');
  }, 1000);
};


// Cursor
const cursor = document.querySelector('.cursor'),
      links  = document.querySelectorAll('a, button');

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});

links.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('cursor_hover');
  });

  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor_hover');
  });
});


// Fade In Elements
const elements = document.querySelectorAll('.elem_fade'),
      form     = document.querySelector('.form');

window.addEventListener('load', () => {
  elements.forEach((item) => {
    setTimeout(() => {
      item.classList.add('fade');
    }, 1000);
  });
});

window.addEventListener('scroll', () => {
  if (form.getBoundingClientRect().top < window.innerHeight) {
    form.classList.add('fadeIn');
  } else {
    form.classList.remove('fadeIn');
  }
});


// Paralax on move
document.addEventListener("mousemove", paralax);
function paralax(e) {
  this.querySelectorAll('.img_move').forEach(layer => {
    const speed = layer.getAttribute('data-speed');

    const x = (window.innerWidth - e.pageX*speed)/100;
    const y = (window.innerHeight - e.pageY*speed)/100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}


// Burger & Menu
const burgerButton = document.querySelector('.burger'),
      navMenu = document.querySelector('.nav__wrap');

burgerButton.addEventListener('click', function() {
  if(this.classList.contains('burger_active')) {
    this.classList.remove('burger_active');
    navMenu.classList.remove('nav__wrap_active');
  }      
  else {
    this.classList.add('burger_active');
    navMenu.classList.add('nav__wrap_active');
  }      
});