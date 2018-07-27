

var hamburgerButton = document.querySelector('.hamburger__button');

var mobileNav = document.querySelector('.mobile');



function openMobile() {
   // mobileNav.style.display = 'flex'
   mobileNav.classList.add('open');
}
function closeMobile() {
   // mobileNav.style.display = 'flex'
   mobileNav.classList.remove('open');
}

hamburgerButton.addEventListener('click', openMobile);
mobileNav.addEventListener('click', closeMobile);


// mobileNav - paspaudus ant viso div uzsidaro langas!
