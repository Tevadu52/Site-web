const tabs = document.querySelectorAll("li")
const sections = document.querySelectorAll(".content")

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelector(".tab-active").classList.remove("tab-active")
        sections.forEach(section => {
            section.classList.remove("active")
            if(section.classList.contains(this.classList[1])){
                section.classList.add("active")
            }
        })
        this.classList.add("tab-active")
    })
});