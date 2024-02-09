const menu = document.querySelector(".burger")

menu.addEventListener("click", function ()
    {
        let lien = document.querySelector(".link")
        if(lien.classList.contains("visible")){
            lien.classList.remove("visible")
        }else{
            lien.classList.add("visible")
        }
    }
)

const mode = document.querySelector(".mode")

mode.addEventListener("click", function ()
    {
        let colors = document.querySelectorAll("*")
        colors.forEach(color => {
            if(color.classList.contains("dark")){
                color.classList.remove("dark")
            }else{
                color.classList.add("dark")
            }
        });
    }
)
