function toggleDropdown() {
  const dropdown = document.querySelector('.dropdown-content');
  dropdown.classList.toggle('show');
}

// Close dropdown if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
  }
};
