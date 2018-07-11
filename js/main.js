
var modal = document.getElementById('nav_modal');

// Get the button that opens the modal
var btn = document.getElementById("hamburger");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

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


// nav bar color change 
var top1 = $('#header').offset().top;
var top2 = $('#aboutus').offset().top;
var top3 = $('#contact').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2) {
    $('#nav').css('background', 'white');
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $('#nav').css('background', 'white');
  } else if (scrollPos >= top3) {
    $('#nav').css('background', 'white');
  }
});