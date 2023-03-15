function goToPlans() {
    window.location.href = "../Better Mental State Subscription Plans/Better Mental State Subscription Plans.html";
}

function fadeInS() {
    let fadeInItems = document.querySelectorAll('.fade-in-s');
    
    fadeInItems.forEach(item => {
      let position = item.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.3;
      
      if (position < screenPosition) {
        item.style.opacity = '1';
      }
    });
  }
  window.addEventListener('scroll', fadeInS);