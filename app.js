"use strict";

let isDay;
let slide = 0;
let darkModeToggle = document.body;
let darkmodenonIndex = document.getElementsByClassName("non-indexMain");

const imageLocations = ["images/internationalsummit.png","images/basilica.png","images/mushroomtown.png","images/nationalPark.png"];
const imageCaptions = ["The international summit", "The Shelmouth Basilica", "Mushroom town", "Bamboo Shogunate National Park"];

const splashContent = ["Server now 50% less broken!",
                    "Visit Mushroom Mountain!",
                    "Visit the National Park!",
                    "BSRC approved!",
                    "Try the webcomic 'pragmatist'!",
                    "100% Fairycore!",
                    "Is it pronounced 'Kignee'???",
                    "General Lazy!",
                    "Is this abandoned?",
                    "kidney!",
                    "Pet your dog!",
                    "Also try 'Mount and Blade'!",
                    "Try Tech Educators!",
                    "DIY or Die!",
                    "Bedrock players complain less!",
                    "We love Cheese Man!",
                    "Clown Girl was here!",
                    "Sleep or DC!",
                    "BREAK YOUR BOATS!",
                    "Marty lives!",
                    "Loading Bamboo Spirits...",
                    "Rails & Sails!",
                    "Where mobs teleport behind you!",
                    "Squatter's rights!",
                    "[DEADSPACE 4 SPLASHTEXT]"];

let nations = ["Shogunate"];

function initialise() {
    let retrieveisDay = JSON.parse(localStorage.getItem("isday"));
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


function nationsInit(){
    let nationsTab = document.getElementById("nationsDropdown");
    for (let i = 0; i < nations.length; i++){
        let nationButton = document.createElement("button");
        nationButton.setAttribute("onClick", "document.location=`${nations[i]}.html`");
        nationButton.setAttribute("class","nationButton")
        nationButton.textContent = nations[i];
        nationsTab.appendChild(nationButton);
    }
}

function splashTextInit(){
    let lastIndex = parseInt(JSON.parse(localStorage.getItem("isDay")));
    
    let splash = document.getElementById("splashText");

    
    let splashIndex = parseInt((Math.random() * splashContent.length -1) + 1);
    while(splashIndex == lastIndex){
        splashIndex = parseInt((Math.random() * splashContent.length -1) + 1);
    }

    let newSplash = document.createElement("article");
    newSplash.textContent=splashContent[splashIndex];
    splash.textContent = (splashContent[splashIndex]);

    localStorage.setItem('lastIndex', splashIndex);
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
        document.getElementById("slideshow").src=imageLocations[slide];
        let caption = document.getElementById("slideshowCaption");
        let newCaption = imageCaptions[slide];
        caption.textContent = newCaption;

        slide++
        if(slide == 4){
            slide = 0;
        }

        

        setTimeout(showDivs,5000);
    }
}
