// Your code goes here
// helper to get element
function get(selector){
    return document.querySelector(selector)
}

function getAll(selector){
    return document.querySelectorAll(selector)
}

const logo = get(".logo-heading")
const intro = get(".intro")
const introImg = get(".intro img")
const introHeader = get(".intro h2")
const adventureImg = get(".img-content img")
const funImg = get(".inverse-content .img-content img")
const destinationImg = get(".content-destination img")
const button = getAll(".btn")
const text = get(".home p")

const navLinks = getAll("nav a")

// 1.load
// window.addEventListener('load', (event) => {
//     alert('WELCOME TO FUN BUS')
// })
// 2.resize
window.addEventListener('resize', function(){

    if(window.innerWidth < 700){
        document.body.style.color = "skyblue";
    }else{
        document.body.style.color = "black";
    }
})
// 3.keydown
document.addEventListener('keydown', function(){
    if(event.key){
        introHeader.style.fontSize = "50px"
    }
})
// 4.mouseover
logo.addEventListener('mouseover', function(){
    event.target.style.color ="orange"
})
// 5.double click
introImg.addEventListener('dblclick', function(){
    event.target.style.display = "none"
})
// 6.single click
adventureImg.addEventListener('click', function(){
    event.target.style.transform = "rotate(10deg)"
})
// 7.wheel
funImg.addEventListener('wheel', function(){
    event.preventDefault() 
    event.target.style.transform = "rotate(-10deg)"
})
// 8.mouseup
destinationImg.addEventListener('mouseup', function(){
    event.target.style.height = "300px"
})
// 9.focus, 10.blur
for(i = 0 ; i < navLinks.length ; i++){
    navLinks[i].addEventListener('blur', function(){
        event.target.style.color = "red"
    })
    navLinks[i].addEventListener('focus', function(){
        event.target.style.color = "pink"
    })
}

// stop propagation
intro.addEventListener('click', function(){
    intro.style.backgroundColor = "purple"
    if(event.target.tagName === "H2"){
        event.stopPropagation()
        intro.style.backgroundColor = "yellow"
    }
})


// nav preventDefault
for(i = 0 ; i < navLinks.length ; i++){
    navLinks[i].addEventListener('click', function(){
        event.preventDefault()
        })
}

gsap.from('.main-navigation', {opacity:0, duration:5, x: -50})
gsap.from('.intro', {opacity:0, duration:3, y:-30})