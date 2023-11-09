// Toggle class active untuk hamburger menu

const navbarNav = document.querySelector(".navbar-nav");

//Ketika hamburger Menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk searchform
const searchform = document.querySelector('.search-form');
const searchbox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchform.classList.toggle('active');
  searchbox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart

const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};


// Klik di luar elemen

const hm = document.querySelector ('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button')

document.addEventListener('click',function (e)  {
  if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if(!sb.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove('active');
  }
  if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
})

// modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) =>{
  
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
})


// Klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
}

// klik di luar modal

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
  itemDetailModal.style.display = 'none';
  }
}
 