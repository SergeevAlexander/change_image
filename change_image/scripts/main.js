var myImage = document.querySelector("img");
var scoreimage = 0;
var maxscoreimage = 1;
myImage.onclick = function () {
  let massSrc = ["images/firefox-icon.png", "images/hello-world.png"];
  scoreimage = scoreimage + 1;
  myImage.setAttribute("src", massSrc[scoreimage]);
  if (scoreimage === maxscoreimage) {
    scoreimage = -1;
  } ;
};