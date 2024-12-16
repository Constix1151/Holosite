document.querySelectorAll('.dropdown-btn').forEach(item => {
    item.addEventListener('click', function(event) {
      const dropdownMenu = this.nextElementSibling;
  
      // Toggle the dropdown visibility
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  
      // Close the dropdown if clicked outside
      window.addEventListener('click', function(e) {
        if (!item.contains(e.target)) {
          dropdownMenu.style.display = 'none';
        }
      });
      
      // Prevent the click event from closing the dropdown
      event.stopPropagation();
    });
  });
  