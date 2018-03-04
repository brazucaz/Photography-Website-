let sliderImages = document.querySelectorAll(".slide"),//Number of slides
arrowLeft = document.querySelector("#arrow-left"), //For left arrow.
arrowRight = document.querySelector("#arrow-right"),//for right arrow.
current = 0;//index for current photo.
timer = 7000;//Timer for time.

/*******************************************************************************
This function is responsible for reseting the photos, it basically repaints the
screen.
*******************************************************************************/
function reset() {
  for (let i = 0; i < sliderImages.length; i++)
    sliderImages[i].style.display = "none";
}
/*******************************************************************************
This function will call the reset in order to repaint the screen, it will then
increment the current variable to show the first image. This will then check if
the incremneted variable is greater than the total number of images. if it is
it will set current back to the first image. it will then display the current
image and then call setTimeout which will use the timer for the time and
it will then recursivly call itself.
*******************************************************************************/
function carousel(){
   reset();
   current++;
   if (current > sliderImages.length)
     current = 1
   sliderImages[current-1].style.display = "block";
   setTimeout(carousel, timer);
}
/*******************************************************************************
This method will call the carousel and start the automation, it will then call
reset to paint the image it will then start the slide at image at position
0 or the first image.
*******************************************************************************/
// Init slider
function startSlide() {
  carousel();
  reset();
  sliderImages[0].style.display = "block";
}
/*******************************************************************************
This will call the reset function then set the image back on and decrement the
current variable. This is used for looking at the previous image.
*******************************************************************************/
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}
/*******************************************************************************
This will call the reset function then set the image forward one and increment
the current variable. This is used to look at the next image.
*******************************************************************************/
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}
/*******************************************************************************
  Listener for the left arrow, if the current variable is 0 and they click this
  it will show the last image. After this it will call the slide left function.
*******************************************************************************/
arrowLeft.addEventListener("click", function() {
  if (current === 0)
    current = sliderImages.length;
  slideLeft();
});
/*******************************************************************************
Listener for the right arrow, if the current varibale is the length of the
slideImages it will set the current to the first photo and call the slideRight.
*******************************************************************************/
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1)
    current = -1;
  slideRight();
});


startSlide(); //Starts the script.
