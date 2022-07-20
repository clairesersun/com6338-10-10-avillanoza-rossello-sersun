var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("loaderBar");
    var width = 1;
    var id = setInterval(frame, 25);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        window.location.replace("Welcome Page.html")
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
move()

