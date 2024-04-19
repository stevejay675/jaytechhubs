const sidebar = document.querySelector(".side-bar");
const hamburgerBTN = document.querySelector(".hamburger-menu");
const darkModeBTN = document.querySelector(".dark-and-light-modes");


hamburgerBTN.addEventListener("click", () =>{
    sidebar.classList.toggle("active");
    hamburgerBTN.classList.toggle('active');
});


document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (!sidebar.contains(targetElement) && !hamburgerBTN.contains(targetElement)) {
      sidebar.classList.remove('active');
    }
  });