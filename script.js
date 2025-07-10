function toggleDropdown() {
  document.getElementById('aboutDropdown').classList.toggle('show');
}

// Optional: Close dropdown if user clicks outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dd = document.getElementById('aboutDropdown');
    if (dd && dd.classList.contains('show')) {
      dd.classList.remove('show');
    }
  }
};
