// Wait for DOM content to be fully loaded before running script
document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // Feature 1: Mobile Hamburger Menu Toggle
  // ==========================================
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    // Toggles navigation menu visibility on mobile screens
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Close menu when a navigation link is clicked
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  // ==========================================
  // Feature 2: Dark / Light Mode Theme Toggle
  // ==========================================
  const themeToggleBtn = document.getElementById("themeToggle");

  if (themeToggleBtn) {
    // Check saved theme preference or system setting
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      themeToggleBtn.textContent = "Light Mode";
    }

    // Handle toggle click event
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");

      if (currentTheme === "dark") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        themeToggleBtn.textContent = "Dark Mode";
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeToggleBtn.textContent = "Light Mode";
      }
    });
  }
});