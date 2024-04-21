const sidebar = document.querySelector(".side-bar");
const hamburgerBTN = document.querySelector(".hamburger-menu");
const darkModeBTN = document.querySelector(".dark-and-light-modes");
const htmldiv = document.querySelector(".htmldiv");
const brandname = document.querySelector(".brand-name");
const Contact = document.querySelector(".Contact");
const subcontact = document.querySelector(".sub-contact");
const usefulLinks = document.querySelector(".UseFul-links");
const subusefullinks = document.querySelector(".sub-useful-links");
const chevronIconContact = document.querySelector(".chevron-icon");
const deletebtn = document.querySelector(".delete");
const deletebtnparent = document.querySelector(".browse-more");
const navbar = document.querySelector(".navbar");


    deletebtn.addEventListener("click",  () =>{
      deletebtnparent.classList.add("active");
      navbar.classList.add("active")
    })

    //hamburger menu toggle
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

      console.log(chevronIconContact)
  //contact toggle
  Contact.addEventListener("click", () =>{
    subcontact.classList.toggle("active");
    chevronIconContact.classList.toggle("active");
  })

  //toggle useful links
  usefulLinks.addEventListener("click", () =>{
    subusefullinks.classList.toggle("active")
  })

  //dark and white mode
  darkModeBTN.addEventListener('click', () =>{
    if(darkModeBTN.classList.contains("bi-moon-fill")){
        darkModeBTN.classList.remove("bi-moon-fill");
        darkModeBTN.classList.add("bi-sun-fill");
        htmldiv.classList.add("darkmode");
        sidebar.style.backgroundColor = "black";
        brandname.style.color = "grey"
        hamburgerBTN.style.color = "white"
    } else if(darkModeBTN.classList.contains("bi-sun-fill")){
        darkModeBTN.classList.remove("bi-sun-fill");
        darkModeBTN.classList.add("bi-moon-fill")
        htmldiv.classList.remove("darkmode");
        sidebar.style.backgroundColor = "white";
        brandname.style.color = "#222"
    }
  })