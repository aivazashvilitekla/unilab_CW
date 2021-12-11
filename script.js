var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("card1");
var btn2 = document.getElementById("card2");
var btn3 = document.getElementById("card3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
function dBlock() {
    modal.style.display = "block";
}
function dNone() {
    modal.style.display = "none";
}
// When the user clicks the button, open the modal 
btn.addEventListener('click', dBlock)
btn2.addEventListener('click', dBlock)
btn3.addEventListener('click', dBlock)

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}