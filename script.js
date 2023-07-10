function toggleMode(){
    const html = document.documentElement;
           html.classList.toggle('light');
    
}

const img = document.querySelector("profile img");
    if (html.classList.contains("light"))
     {
        img.setAttribute("src","./assets/avatar-light.png");
    } else {
        img.setAttribute("src","./assets/avatar.png");
    }

   


    function toggleMode() {
        const html = document.documentElement;
        const img = document.querySelector("#profile img");
    
        html.classList.toggle('light');
    
        if (html.classList.contains("light")) {
            img.setAttribute("src", "./assets/avatar-light.png");
        } else {
            img.setAttribute("src", "./assets/avatar.png");
        }
    }
    