      // Perform this after the window has loaded
      window.onload = function() {
        // First, tell JavaScript to remember which DOM element (in this case, a button) to reference (by id)
        let toggleNav = document.getElementById('toggle-nav');

        // Tell button to do something on click
        toggleNav.addEventListener('click', function(){

          // toggle the body's class attribute
          document.body.classList.toggle('nav-open');
        });
      };