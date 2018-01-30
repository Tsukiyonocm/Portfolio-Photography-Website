// Variables
var slideIndex = 0;
var slides = document.getElementsByClassName("slides");
var dots = document.getElementById("dots").children;

showSlides();

//Sets up the Slideshow
function showSlides (){
    displayReset();
    //Slide Index used as input into showSlides
    slideIndex++;
    //Resets if higher then slides.length
    if (slideIndex > slides.length){
        slideIndex = 1;
    }
    dotsSlider();
    //Sets the new slide to display block for viewing
    slides[slideIndex-1].style.display = "block";
    //Set active class to slides[slideIndex-1]
    dots[slideIndex-1].classList.add("active");
    //Time period till display reset
    setTimeout(showSlides, 3000);
}

function displayReset (){
    //Sets all to display: none on every iteration
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        console.log(slideIndex);
    }
}

function dotsSlider(){
    //Activates dots per image slider
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
}
