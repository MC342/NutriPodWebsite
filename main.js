// ### VARIABLES ### //
// Sections
const mainSection = document.querySelector("#MainSection");
const productSection = document.querySelector("#ProductSection");

// Pages
const aboutPage = document.querySelector("#AboutPage");
const titlePage = document.querySelector("#TitlePage");
const theProductPage = document.querySelector("#TheProduct");
const footer = document.querySelector("#Footer");
const inspectPage = document.querySelector("#InspectPage");

// Navigation Buttons
const homeButton1 = document.querySelector("#HomeRightNav1");
const ourStoryButton1 = document.querySelector("#OurStoryLeftNav1");
const ourStoryButton2 = document.querySelector("#OurStoryLeftNav2");
const inspectButton = document.querySelector("#InspectRightNav");
const returnButton1 = document.querySelector("#ReturnLeftNav1");
const returnButton2 = document.querySelector("#ReturnLeftNav2");
const returnButton3 = document.querySelector("#ReturnLeftNav3");

// Drop-Up Boxes
const leftDropUpBox = document.querySelector("#ProductLeftDropUpBox");
const rightDropUpBox = document.querySelector("#ProductRightDropUpBox");
const leftDropUpBoxButtonUp = document.querySelector("#DropUpBoxUpButtonLeft");
const rightDropUpBoxButtonUp = document.querySelector("#DropUpBoxUpButtonRight");
const leftDropUpBoxButtonDown = document.querySelector("#DropUpBoxDownButtonLeft");
const rightDropUpBoxButtonDown = document.querySelector("#DropUpBoxDownButtonRight");

// Customization Images
const whiteCustomImage = document.querySelector("#WhiteCustomImage");
const greyCustomImage = document.querySelector("#GreyCustomImage");
const redCustomImage = document.querySelector("#RedCustomImage");
const greenCustomImage = document.querySelector("#GreenCustomImage");

// Customization Buttons
const colourButton1 = document.querySelector("#ColourButton1");
const colourButton2 = document.querySelector("#ColourButton2");
const colourButton3 = document.querySelector("#ColourButton3");
const colourButton4 = document.querySelector("#ColourButton4");

// Purchase Images
const whitePurchaseImage = document.querySelector("#WhitePurchaseImage");
const greyPurchaseImage = document.querySelector("#GreyPurchaseImage");
const redPurchaseImage = document.querySelector("#RedPurchaseImage");
const greenPurchaseImage = document.querySelector("#GreenPurchaseImage");

// Miscelaneous
const progressRing = document.querySelector("sl-progress-ring");

// Set Values
let maxAboutScroll = 0;
let maxMainScroll = 0;
let maxProductScroll = 0;
let dropUpBoxDownValue = 80;
let dropUpBoxUpValue = 6;

// Response Form
const contactForm = document.querySelector(".FooterLeftInputContainer");

// Title Page Content
let titleTimeline = gsap.timeline({
    scrollTrigger: { // Creates a scroll trigger for the title logo animation
        trigger: "#TitlePage",
        start: "top",
        end: "bottom",
        scrub: 1} // Links the animation timeline directly to the scroll amount
});
let titleTimelineSpeed = 2; // Initialises animation speed




// ### ANIMATIONS ### //

// -- Initial Title Anim -- //
// Temporarily disables below pages while animation runs
theProductPage.style.display = 'none';
footer.style.display = 'none';

// Animates title sections over 4 seconds
gsap.from("#M", {x:150, y:150, opacity:0, ease:1, duration:titleTimelineSpeed});
gsap.from("#TR", {x:150, y:-150, opacity:0, ease:1, duration:titleTimelineSpeed});
gsap.from("#BL", {x:-150, y:150, opacity:0, ease:1, duration:titleTimelineSpeed});
gsap.from("#NUTRIPOD", {y:60, opacity:0, ease:1, duration:titleTimelineSpeed}, "+=0");

// Re-enables below sections after animation finishes
setTimeout(function() {
    theProductPage.style.display = 'flex';
    footer.style.display = 'flex';
}, 4000);


// -- Title Timeline -- //
// Adds tittle animation to scroll timeline
titleTimeline.to("#M", {x:150, y:150, opacity:0, ease:1, duration:titleTimelineSpeed}, "+=0.5")
.to("#TR", {x:150, y:-150, opacity:0, ease:1, duration:titleTimelineSpeed}, "-=2")
.to("#BL", {x:-150, y:150, opacity:0, ease:1, duration:titleTimelineSpeed}, "-=2")
.to("#NUTRIPOD", {y:60, opacity:0, ease:1, duration:titleTimelineSpeed});




// ### FUNCTIONS ### //

// Disolved in new image on customization page
function customizationImageSwap(image1, image2, image3, image4){
    // Places selected image on top of others
    image1.style.zIndex = "999";
    image2.style.zIndex = "1";
    image3.style.zIndex = "1";
    image4.style.zIndex = "1";

    // Disolves image in
    image1.classList.add("CustomImageOn");

    // Disolves other images out half a second later
    setTimeout(function() {
        image2.classList.remove("CustomImageOn");
        image3.classList.remove("CustomImageOn");
        image4.classList.remove("CustomImageOn");
    }, 500);
}


// Swaps the displayed image on the purchase page
function purchaseImageSwap(image1, image2, image3, image4){
    image1.style.display = "inline";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
}


// Swaps which button is marked as selected, and swaps the corresponding images
function customizationControl(button){
    if (button === colourButton1){
        colourButton1.classList.add("ColourButton1On");
        colourButton2.classList.remove("ColourButton2On");
        colourButton3.classList.remove("ColourButton3On");
        colourButton4.classList.remove("ColourButton4On");

        customizationImageSwap(whiteCustomImage, greyCustomImage, redCustomImage, greenCustomImage);
        purchaseImageSwap (whitePurchaseImage, greyPurchaseImage, redPurchaseImage, greenPurchaseImage);
    }

    else if (button === colourButton2){
        colourButton1.classList.remove("ColourButton1On");
        colourButton2.classList.add("ColourButton2On");
        colourButton3.classList.remove("ColourButton3On");
        colourButton4.classList.remove("ColourButton4On");

        customizationImageSwap(greyCustomImage, whiteCustomImage, redCustomImage, greenCustomImage);
        purchaseImageSwap (greyPurchaseImage, whitePurchaseImage, redPurchaseImage, greenPurchaseImage);
    }

    else if (button === colourButton3){
        colourButton1.classList.remove("ColourButton1On");
        colourButton2.classList.remove("ColourButton2On");
        colourButton3.classList.add("ColourButton3On");
        colourButton4.classList.remove("ColourButton4On");

        customizationImageSwap(redCustomImage, whiteCustomImage, greyCustomImage, greenCustomImage);
        purchaseImageSwap (redPurchaseImage, whitePurchaseImage, greyPurchaseImage, greenPurchaseImage);
    }

    else if (button === colourButton4){
        colourButton1.classList.remove("ColourButton1On");
        colourButton2.classList.remove("ColourButton2On");
        colourButton3.classList.remove("ColourButton3On");
        colourButton4.classList.add("ColourButton4On");

        customizationImageSwap(greenCustomImage, redCustomImage, whiteCustomImage, greyCustomImage);
        purchaseImageSwap (greenPurchaseImage, redPurchaseImage, whitePurchaseImage, greyPurchaseImage);
    }
}


// Translates the drop-up boxes up/down, and swaps the arrow image
function dropUpBoxControl(side, state){
    if (side === "Left"){
        if (state == "Up"){
            leftDropUpBox.style.transform = "translateY(" + dropUpBoxDownValue + "%)";
            leftDropUpBoxButtonUp.style.display = "inline";
            leftDropUpBoxButtonDown.style.display = "none";
        }
        else{
            leftDropUpBox.style.transform = "translateY(" + dropUpBoxUpValue + "%)";
            leftDropUpBoxButtonUp.style.display = "none";
            leftDropUpBoxButtonDown.style.display = "inline";
        }
    }

    else if (side === "Right"){
        if (state == "Up"){
            rightDropUpBox.style.transform = "translateY(" + dropUpBoxDownValue + "%)";
            rightDropUpBoxButtonUp.style.display = "inline";
            rightDropUpBoxButtonDown.style.display = "none";
        }
        else{
            rightDropUpBox.style.transform = "translateY(" + dropUpBoxUpValue + "%)";
            rightDropUpBoxButtonUp.style.display = "none";
            rightDropUpBoxButtonDown.style.display = "inline";
        }
    }
}


// Calculates what value to give the page scroll wheel
function pageScrollAmount(){
    // Calculates current scroll height
    let scrollHeight = window.scrollY;

    // If the about page is visable
    if (aboutPage.style.display === "flex"){
        // Calculates maximum scroll height of current page
        maxAboutScroll = scrollHeight;
        // Calculates percentage scrolled down page
        return (scrollHeight/maxAboutScroll) * 100;
    }

    else if (mainSection.style.display === "flex"){
        maxMainScroll = (window.innerHeight) * 1.5;
        return (scrollHeight/maxMainScroll) * 100;
    }

    else if (productSection.style.display === "flex"){
        maxProductScroll = (window.innerHeight) * 2;
        return (scrollHeight/maxProductScroll) * 100;
    }
}


// General function to navigate to different pages
function pageScroll(start, startSection, end, endSection, intermediary){
    // Scroll to intermediary starting point
    if (intermediary){
        intermediary.scrollIntoView();
    }

    setTimeout(function() {
        // Temporarily disables smooth scroll
        document.documentElement.style.scrollBehavior = "auto";
        // Reveals end page
        endSection.style.display = "flex";
        // Snap back to previous page
        start.scrollIntoView();
        // Re-enables smooth scoll
        document.documentElement.style.scrollBehavior = "smooth";
        // Scrolls up to end page
        end.scrollIntoView();

        // Hides start page
        setTimeout(function() {
            startSection.style.display = "none";
            document.documentElement.style.scrollBehavior = "auto";
            end.scrollIntoView();
            document.documentElement.style.scrollBehavior = "smooth";
        }, 1000);
    }, 1000); 
}


// Function to trigger page navigation for each button
function pageNavigation(button){
    if (button === homeButton1){
        pageScroll(aboutPage, aboutPage, titlePage, mainSection, aboutPage);
    }

    else if (button === ourStoryButton1){
        pageScroll(titlePage, mainSection, aboutPage, aboutPage, titlePage);
    }
    
    else if (button === ourStoryButton2){
        pageScroll(titlePage, mainSection, aboutPage, aboutPage, titlePage);
    }
    
    else if (button === inspectButton){
        pageScroll(theProductPage, mainSection, inspectPage, productSection, theProductPage);
        
        // Adjust Section Upwards
        setTimeout(function() {
            document.documentElement.style.scrollBehavior = "auto";
            productSection.style.transform = "translateY(0vh)";
            inspectPage.scrollIntoView();
            document.documentElement.style.scrollBehavior = "smooth";
        }, 2000);
    }
    
    else if (button === returnButton1 || button === returnButton2 || button === returnButton3){
        inspectPage.scrollIntoView();
        
        setTimeout(function() {
            // Adjust Section Downwards 
            document.documentElement.style.scrollBehavior = "auto";
            productSection.style.transform = "translateY(100vh)";
            inspectPage.scrollIntoView();
            document.documentElement.style.scrollBehavior = "smooth";
            
            pageScroll(inspectPage, productSection, theProductPage, mainSection);
        }, 1000);
    }
}




// ### EVENT LISTENERS ### //
// Navigation Buttons
homeButton1.addEventListener("click", function(){
    pageNavigation(homeButton1);
});

ourStoryButton1.addEventListener("click", function(){
    pageNavigation(ourStoryButton1);
});

ourStoryButton2.addEventListener("click", function(){
    pageNavigation(ourStoryButton2);
});

inspectButton.addEventListener("click", function(){
    pageNavigation(inspectButton);
});

returnButton1.addEventListener("click", function(){
    pageNavigation(returnButton1);
});

returnButton2.addEventListener("click", function(){
    pageNavigation(returnButton2);
});

returnButton3.addEventListener("click", function(){
    pageNavigation(returnButton3);
});


// Scrolling
document.addEventListener("scroll", function(){
    progressRing.value = pageScrollAmount();
});


// Drop-Up Boxes
leftDropUpBoxButtonUp.addEventListener("click", function(){
    dropUpBoxControl("Left", "Down");
});

leftDropUpBoxButtonDown.addEventListener("click", function(){
    dropUpBoxControl("Left", "Up");
});

rightDropUpBoxButtonUp.addEventListener("click", function(){
    dropUpBoxControl("Right", "Down");
});

rightDropUpBoxButtonDown.addEventListener("click", function(){
    dropUpBoxControl("Right", "Up");
});


// Submit Button
function handleForm(event) {event.preventDefault();}
contactForm.addEventListener('submit', handleForm);


// Splide Image Carousel
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#NutriPodProductPreview' ).mount();
} );


// Customization Buttons
colourButton1.addEventListener("click", function(){
    customizationControl(colourButton1);
});

colourButton2.addEventListener("click", function(){
    customizationControl(colourButton2);
});

colourButton3.addEventListener("click", function(){
    customizationControl(colourButton3);
});

colourButton4.addEventListener("click", function(){
    customizationControl(colourButton4);
});