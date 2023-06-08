let isDay

function initialise() {
    isDay = true;
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

