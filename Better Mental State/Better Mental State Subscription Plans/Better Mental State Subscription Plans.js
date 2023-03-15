function goToSignIn(){
    window.location.href = "../Better Mental State Free Plan Sign up/Better Mental State Free Plan Sign up.html";
}

function fadeInS() {
  let fadeInItems = document.querySelectorAll('.fade-in-s');
  
  fadeInItems.forEach(item => {
    let position = item.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.1;
    
    if (position < screenPosition) {
      item.style.opacity = '1';
    }
  });
}
window.addEventListener('scroll', fadeInS);