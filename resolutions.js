let resolutions = document.getElementsByClassName("resolutionButton");

for (let i = 0; i < resolutions.length; i++){
    resolutions[i].addEventListener("click",function(){
        let content =resolutions[i].nextElementSibling;
        console.log(content);
        content.classList.toggle("displayResolutionContent");
    });
}



