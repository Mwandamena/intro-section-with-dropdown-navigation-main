// navbar and buttons
const toggler = document.querySelector('.navbar-toggler');
const nav = document.querySelector('.nav')
const overlay = document.querySelector(".overlay")

// dropdown and links
const dropdownOne = document.querySelector(".menu-1")
const dropdownTwo = document.querySelector(".menu-2")
const dropdownBtnOne = document.querySelector(".dropdown-1")
const dropdownBtnTwo = document.querySelector(".dropdown-2")
const down = document.querySelector(".down")
const up = document.querySelector(".up")
const link = document.querySelectorAll("#link")



// add an event
toggler.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible")
    if (visibility === "false") {
        overlay.setAttribute("aria-expanded", "true")
        nav.setAttribute("data-visible", "true")
        toggler.setAttribute("aria-expanded", "true")
    }else if (visibility === "true"){
        overlay.setAttribute("aria-expanded", "false")
        nav.setAttribute("data-visible", "false")
        toggler.setAttribute("aria-expanded", "false")
    }
})

// close menu when the link is clicked
function closeMenu(link){
    link.forEach(element => {
        element.addEventListener("click", () => {
            overlay.setAttribute("aria-expanded", "false")
            nav.setAttribute("data-visible", "false")
            toggler.setAttribute("aria-expanded", "false")
        })
    })
}

closeMenu(link)


// dropdown functionality
function dropdown(element, target){
    element.addEventListener("click", () => {
        target.classList.toggle("dropdown-active")
        // needs to be reviewed
        // target.parentElement.classList.toggle("close")
        // target.parentElement.classList.toggle("open")
    })
}

dropdown(dropdownBtnOne, dropdownOne)
dropdown(dropdownBtnTwo, dropdownTwo)