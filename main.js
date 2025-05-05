document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const offcanvasNavbar = new bootstrap.Offcanvas('#offcanvasNavbar');
    
    navbarToggler.addEventListener('click', function() {
      if (window.innerWidth < 992) {
        offcanvasNavbar.toggle();
      }
    });
    
    // Close sidebar when clicking a link
    const navLinks = document.querySelectorAll('.offcanvas-body .nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          offcanvasNavbar.hide();
        }
      });
    });
  });