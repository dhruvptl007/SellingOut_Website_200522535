
     /* To active Hamburger */
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');
})
function setActive() {
    const links = document.querySelectorAll('.nav-list li a');
    const currentLocation = location.href;
  
    links.forEach(link => {
      if (link.href === currentLocation) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  setActive();
  


function returnText(){
    let input1 = document.getElementById("name").value;
    document.getElementById("name").value="";
    let input2 = document.getElementById("phone").value;
    document.getElementById("phone").value="";
    let input3 = document.getElementById("email").value;
    document.getElementById("email").value="";
    let input4 = document.getElementById("text").value;
    document.getElementById("text").value="";
    let input5 = document.getElementById("purchase").value;
    document.getElementById("purchase").value="";
    alert("You will get notification on your email shortly for payment confirmation") /*Alert message when submit button is clicked*/
    

}
// Get the slide-up container element
var slideUpContainer = document.querySelector('.slide-up-container');

// Get the height of the slide-up container
var slideUpContainerHeight = slideUpContainer.offsetHeight;

// Listen for the scroll event
window.addEventListener('scroll', function() {
  // Get the current scroll position
  var scrollPosition = window.scrollY;

  // Check if the user has scrolled past the slide-up container
  if (scrollPosition > slideUpContainer.offsetTop - window.innerHeight + slideUpContainerHeight / 2) {
    // Add the "show" class to the slide-up container
    slideUpContainer.classList.add('show');
  }
});




