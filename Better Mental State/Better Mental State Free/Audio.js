const player = document.getElementById("player");
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");

audio1.addEventListener("click", function() {
  player.pause();
  player.src = document.getElementById("source1").src;
  player.play();
});

audio2.addEventListener("click", function() {
  player.pause();
  player.src = document.getElementById("source2").src;
  player.play();
});

audio3.addEventListener("click", function() {
  player.pause();
  player.src = document.getElementById("source3").src;
  player.play();
});

audio4.addEventListener("click", function() {
    player.pause();
    player.src = document.getElementById("source4").src;
    player.play();
  });
  
  audio5.addEventListener("click", function() {
    player.pause();
    player.src = document.getElementById("source5").src;
    player.play();
  });