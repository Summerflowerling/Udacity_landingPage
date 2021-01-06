/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
 * 
 * 
*/
const navbarUl =  document.getElementById("navbar__list")
const sectionWrapper = document.querySelector("main")
const header = document.querySelector(".main__hero")
const section1 = document.querySelector("#section1")
const section2 = document.querySelector("#section2")
const section3 = document.querySelector("#section3")
const newContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin "
let totalSectionNumber = 3; //initial value
let newList;
let bodySection = ["section1", "section2", "section3"];




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


//add new section and its children elements
//the number 3 is the default section amount

function createSection(numberOfSectionToCreate){
    
    for(let i=1 ; i<=numberOfSectionToCreate ; i++){
        totalSectionNumber++;
        let newSection = document.createElement("section")
        newSection.setAttribute("id", `section${3+i}`)
        newSection.innerHTML = 
        `
        <div class="landing__container"> 
        <h2>Section ${3+i}</h2>
        <p id="section${3+i}p" class="section${3+i}-p"></p>
        </div>
        `
        sectionWrapper.appendChild(newSection)
        bodySection.push(newSection.id)
    }
}

createSection(3)

//adding content to the new 
// created section
const section4 = document.querySelector("#section4p")
console.log(section4)
section4.textContent = newContent



//add list item for nav bar

function addNavList(totalSectionNumber){
    for (let i=1 ; i<=totalSectionNumber ; i++){     
         newList = document.createElement("li")
        newList.setAttribute("id","list-item"+i)
        newList.textContent = `section${i}`
        navbarUl.appendChild(newList) 
    }
}

addNavList(totalSectionNumber);




// Check if the section is in the viewport
function isInViewport(section) {
    const rect = section.getBoundingClientRect();
    
    if(window.innerWidth>=1024){
       return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (1090 || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    } else if (window.innerWidth<=280){
       
        return (
            rect.top >= -150 &&
            rect.left >= 0 &&
            rect.bottom <= (1300 || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    } else{
        console.log(document.querySelector("#section2").getBoundingClientRect())
        return(
            rect.top >= -250 &&
            rect.left >= 0 &&
            rect.bottom <= (1100 || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    }
    





/**
 * End Main Functions
 * Begin Events
 * 
*/

 
//Scroll to the section when click the list item
//on nav bar

navbarUl.addEventListener("click",function(event){
    event.preventDefault()

     
    //remove active style from the 
    //section which is not being viewed
    
    for (let i=0 ; i<document.querySelectorAll(".highLight").length ; i++){
        document.querySelectorAll(".highLight")[i].classList.remove("highLight")
     }

     //add active style to the section 
     //which is being viewd
     
    document.querySelector(`#${event.target.textContent}`).scrollIntoView()
    event.target.classList.add("highLight")
    
}) 

//When user scroll, add the active style 
//to the corresponding section
document.addEventListener("scroll", function(){
    let resultOfIsInViewport
    for(let i=0 ; i<document.querySelectorAll(".highLight").length ; i++){
        document.querySelectorAll(".highLight")[i].classList.remove("highLight")
    }
   
    for(let i=1; i<=totalSectionNumber ; i++){
        resultOfIsInViewport = isInViewport(document.querySelector(`#section${i}`))
        if(resultOfIsInViewport) {
            document.querySelector(`#list-item${i}`).classList.add("highLight")
        }

    }
    
})







