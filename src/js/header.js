function handleScroll() {
  var spHeader = document.getElementById('sp-header');
  if (window.pageYOffset > 330) {
    spHeader.classList.add('white');
  } else {
    spHeader.classList.remove('white');
  }
}

// Function to handle menu opening
function openMenu() {
  var scrollpos = window.pageYOffset;
  document.body.classList.add('locked');
  document.body.style.top = -scrollpos + 'px';
  document.getElementById('overray').style.display = 'block';
}

// Function to handle menu closing
function closeMenu() {
  var scrollpos = parseInt(document.body.style.top, 10);
  document.body.classList.remove('locked');
  document.body.style.top = '';
  window.scrollTo(0, Math.abs(scrollpos));
  document.getElementById('overray').style.display = 'none';
}

// Attach event listeners
window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('menu-trigger').addEventListener('click', openMenu);
  document.getElementById('close-trigger').addEventListener('click', closeMenu);
});
