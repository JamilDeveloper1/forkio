document.addEventListener("DOMContentLoaded" , () => {
    let menuBar = document.querySelector(".fa-bars-staggered"); 
    let faTimes = document.querySelector(".fa-times");
    let navbarUl = document.querySelector(".navbarUl");
    menuBar.addEventListener("click" , () => {
        console.log(navbarUl);
        navbarUl.classList.toggle("openNav");
        menuBar.style.display = 'none';
        faTimes.style.display = 'block';
    })
    faTimes.addEventListener("click" , () => {
        console.log(navbarUl);
        navbarUl.classList.toggle("openNav");
        faTimes.style.display = 'none';
        menuBar.style.display = 'block';
    })





})



//document.addEventListener("DOMContentLoaded", () => {
 //   document.querySelectorAll(".links").forEach(item => {
   //     item.addEventListener("click", () => {
     //       document.querySelectorAll(".links").forEach(link => link.classList.remove('active'));
       //     item.classList.add('active');
  //      });
 //   });
//});


