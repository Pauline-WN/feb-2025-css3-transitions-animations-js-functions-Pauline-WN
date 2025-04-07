// Check localStorage for user preference
window.onload = function() {
    const animateButton = document.getElementById('animateButton');
    const preferenceStatus = document.getElementById('preferenceStatus');
    
    // Retrieve user preference from localStorage
    const preference = localStorage.getItem('animateButtonState');
    if (preference === 'bouncing') {
      animateButton.classList.add('bouncing');
      preferenceStatus.textContent = 'Button is bouncing! You chose to animate it.';
    } else {
      preferenceStatus.textContent = 'Button is not bouncing. You can choose to animate it.';
    }
  
    // Add event listener to button for triggering animation
    animateButton.addEventListener('click', function() {
      if (animateButton.classList.contains('bouncing')) {
        animateButton.classList.remove('bouncing');
        preferenceStatus.textContent = 'Button stopped bouncing. You can choose to animate it.';
        localStorage.setItem('animateButtonState', 'stopped');
      } else {
        animateButton.classList.add('bouncing');
        preferenceStatus.textContent = 'Button is bouncing! You chose to animate it.';
        localStorage.setItem('animateButtonState', 'bouncing');
      }
    });
  };
  