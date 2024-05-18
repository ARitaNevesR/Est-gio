function openNavbar() {
    var navbar = document.getElementById('navbar-small-content');
    var navbarBackground = document.getElementById('navbar-container')
    if (navbar.style.display === "block") {
      navbar.style.display = "none";
      navbarBackground.style.background = 'linear-gradient(to bottom, black, transparent) '
  
    } else {
      navbar.style.display = "block";
      navbarBackground.style.background = 'rgba(0, 138, 171, 1)'
    }
  }
  
  function openSubNavbar() {
    var navbar = document.getElementById('sub-navbar-small-content');
    var navbarBackground = document.getElementById('navbar-container')
    if (navbar.style.display === "block") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
  }