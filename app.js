let isDay;
let slide = 0;
let darkModeToggle = document.body;

const images = ["images/internationalsummit.png","images/basilica.png","images/mushroomtown.png","images/nationalPark.png"];


function initialise() {
    let retrieveisDay = JSON.parse(localStorage.getItem("isday"));
    console.log(retrieveisDay);
    if (retrieveisDay == true){
        isDay = true;
    } 
    else{
        darkModeToggle.classList.add("dark-mode");
        isDay = false;
    }
    showDivs();
}

function darkMode() {

    if (isDay == true){
        document.getElementById("buttonimage").src="images/button-night.png";
        darkModeToggle.classList.add("dark-mode");
        isDay = false;
    }
    else{
        document.getElementById("buttonimage").src="images/button-day.png";
        darkModeToggle.classList.remove("dark-mode");
        isDay = true;
    }
    
    localStorage.setItem(`isday`, isDay);
}

function showDivs(){
        document.getElementById("slideshow").src=images[slide];
        slide++
        if(slide == 4){
            slide = 0;
        }
        setTimeout(showDivs,5000);
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