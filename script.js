window.onscroll = function() {changeNavbarStyle()};

function changeNavbarStyle() {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 100) {
    navbar.classList.add("scrolled-navbar");
  } else {
    navbar.classList.remove("scrolled-navbar");
  }
}
