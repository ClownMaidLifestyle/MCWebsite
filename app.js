let isDay;
let slide = 0;
let darkModeToggle = document.body;
let darkmodenonIndex = document.getElementsByClassName("non-indexMain");

const images = ["images/internationalsummit.png","images/basilica.png","images/mushroomtown.png","images/nationalPark.png"];
const splashContent = ["Server now 50% less broken!",
                    "Visit Mushroom Mountain!",
                    "Visit the National Park!",
                    "BSRC!",
                    "Try the webcomic 'pragmatist'!",
                    "100% Fairycore!",
                    "Is it pronounced 'Kignee'???",
                    "General Lazy!",
                    "Is this abandoned?",
                    "kidney!",
                    "Pet your dog!",
                    "Also try 'Mount and Blade'!",];

function initialise() {
    let retrieveisDay = JSON.parse(localStorage.getItem("isday"));
    console.log(retrieveisDay);
    if (retrieveisDay == true){
        isDay = true;
    } 
    else{
        darkModeToggle.classList.add("dark-mode");
        if (darkmodenonIndex[0] != null){
            darkmodenonIndex[0].classList.add("dark-mode");
            darkmodenonIndex[1].classList.add("dark-mode");
        }
        isDay = false;
    }
    showDivs();
}

function splashTextInit(){
    console.log("yuh");
    let splash = document.getElementById("splashText");
    let splashIndex = parseInt((Math.random() * splashContent.length -1) + 1);
    console.log(splashIndex);
    let newSplash =document.createElement("article");
    newSplash.textContent=splashContent[splashIndex];
    splash.textContent = (splashContent[splashIndex]);
}

function darkMode() {

    if (isDay == true){
        document.getElementById("buttonimage").src="images/button-night.png";
        darkModeToggle.classList.add("dark-mode");
        console.log(darkmodenonIndex);
        if (darkmodenonIndex[0] != null){
            darkmodenonIndex[0].classList.add("dark-mode");
            darkmodenonIndex[1].classList.add("dark-mode");
        }
        isDay = false;
    }
    else{
        document.getElementById("buttonimage").src="images/button-day.png";
        darkModeToggle.classList.remove("dark-mode");
        if (darkmodenonIndex[0] != null){
            darkmodenonIndex[0].classList.remove("dark-mode");
            darkmodenonIndex[1].classList.remove("dark-mode");
        }
        isDay = true;
    }
    
    localStorage.setItem(`isday`, isDay);
}

function showDivs(){
    if (document.getElementById("slideshow") != null){
        document.getElementById("slideshow").src=images[slide];
        slide++
        if(slide == 4){
            slide = 0;
        }
        setTimeout(showDivs,5000);
    }
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