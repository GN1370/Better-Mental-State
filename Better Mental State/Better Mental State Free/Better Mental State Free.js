function goToGreet() {
    window.location.href = "#greet";
}
function goToExercises() {
    window.location.href = "#exercises";
}
function goToMusic() {
    window.location.href = "#music";
}
function goToTipsResources() {
    window.location.href = "#tips-resources";
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