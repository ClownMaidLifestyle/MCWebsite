let isDay;
let slide = 0;
const images = ["images/internationalsummit.png","images/basilica.png","images/mushroomtown.png","images/nationalPark.png"];


function initialise() {
    isDay = true;
    slide = 0;
    showDivs()
}

function darkMode() {
    let darkModeToggle = document.body;
    darkModeToggle.classList.toggle("dark-mode");

    if (isDay == true){
        document.getElementById("buttonimage").src="images/button-night.png";
        isDay = false;
        document.getElementsByClassName("button").style.borderColor="white";
    }
    else{
        document.getElementById("buttonimage").src="images/button-day.png";
        isDay = true;
        document.getElementsByClassName("button").style.borderColor="black";
    }
    
}

function showDivs(){
        document.getElementById("slideshow").src=images[slide];
        slide++
        if(slide == 4){
            slide = 0;
        }
        setTimeout(showDivs,2000);
}


/*    let x;
    let imageDivs;
    imageDivs = document.querySelectorAll(".slideshow");
    for(let i = 0; i = imageDivs.length; i++){
        if (i == slide){
            imageDivs[i].style.display = "block";
            console.log(i)
        }
        else{
            imageDivs[i].style.display = "none";
            console.log("I have hidden an image");
        }
    }
    
    slide++;
    if (slide == 4){
        slide = 0;
    }
    console.log("I am running"); */