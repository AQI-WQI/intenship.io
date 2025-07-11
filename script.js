window.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar-container");

  if (navbarContainer) {
    fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        navbarContainer.innerHTML = data;

        // Highlight active page link
        const currentPage = window.location.pathname.split("/").pop();
        document.querySelectorAll(".navbar a").forEach(link => {
          if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
          }
        });
      })
      .catch(err => console.error("Navbar load error:", err));
  }
});
