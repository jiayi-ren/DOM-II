// Your code goes here
// helper to get element
function get(selector){
    return document.querySelector(selector)
}

function getAll(selector){
    return document.querySelectorAll(selector)
}

const logo = get(".logo-heading")
const introImg = get(".intro img")
const introHeader = get(".intro h2")
const adventureImg = get(".img-content img")
const funImg = get(".inverse-content .img-content img")
const destinationImg = get(".content-destination img")
const button = get(".btn")
const text = get(".home p")

const navLinks = getAll("nav a")


window.addEventListener('load', (event) => {
    alert('WELCOME TO FUN BUS')
})

window.addEventListener('resize', function(){

    if(window.innerWidth < 700){
        document.body.style.color = "skyblue";
    }else{
        document.body.style.color = "black";
    }
})

document.addEventListener('keydown', function(){
    if(event.key){
        introHeader.style.fontSize = "50px"
    }
})

logo.addEventListener('mouseover', function(){
    event.target.style.color ="orange"
})

introImg.addEventListener('dblclick', function(){
    event.target.style.display = "none"
})

adventureImg.addEventListener('click', function(){
    event.target.style.transform = "rotate(10deg)"
})

funImg.addEventListener('wheel', function(){
    event.preventDefault() 
    event.target.style.transform = "rotate(-10deg)"
})

destinationImg.addEventListener('mouseup', function(){
    event.target.style.height = "300px"
})


// nav
for(i = 0 ; i < navLinks.length ; i++){
    navLinks[i].addEventListener('click', function(){
        event.preventDefault()
        })
}
