  // Toggle side navigation visibility
  const sideNav = document.querySelector(".side-nav");
  const openBtn = document.getElementById("nav-open");
  const closeBtn = document.getElementById("nav-close");

  openBtn.addEventListener("click", () => {
    sideNav.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    sideNav.classList.remove("active");
  });

  // Handle primary dropdown toggle in side nav
  document.querySelectorAll('.side-nav .dropdown > a').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const dropdown = anchor.parentElement;

      dropdown.classList.toggle('active');

      // Optional: close other dropdowns
      document.querySelectorAll('.side-nav .dropdown').forEach(other => {
        if (other !== dropdown) {
          other.classList.remove('active');
        }
      });
    });
  });

  // Handle sub-dropdown toggle in side nav
  document.querySelectorAll('.side-nav .dropdown-sub > a').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const subDropdown = anchor.parentElement;

      subDropdown.classList.toggle('active');

      // Optional: close other submenus
      document.querySelectorAll('.side-nav .dropdown-sub').forEach(other => {
        if (other !== subDropdown) {
          other.classList.remove('active');
        }
      });
    });
  });
