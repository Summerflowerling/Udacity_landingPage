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

section3.style.backgroundColor = "yellow"

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function addNavList(num){
   
    for (let i=1 ; i<=num ; i++){
        
        const newList = document.createElement("li")
        newList.setAttribute("id","list-item"+i)
        newList.innerText = "section"+i
        navbarUl.appendChild(newList)
       
    }
   
}

addNavList(4)

function createSection(orderOfSection){
    const newSection = document.createElement("section")
    newSection.innerHTML = 
    `<section id="section${orderOfSection}"> 
    <div class="landing__container"> 
    <h2>Section ${orderOfSection}</h2>
    <p></p>
    </div>
    </section>`
    sectionWrapper.appendChild(newSection)
}

/*get list item in the Nav*/
const listItem1 = document.querySelector("#list-item1")
const listItem2 = document.querySelector("#list-item2")
const listItem3 = document.querySelector("#list-item3")
const listItem4 = document.querySelector("#list-item4")



document.addEventListener("click" ,function scroll(event){
    if (event.target.id==="list-item4"){
        createSection(4) 
    }
    switch (event.target.id){
        case "list-item1" :
            section1.scrollIntoView(true);
            break;
        case "list-item2":
            section2.scrollIntoView(true);
            break;
        case "list-item3":
            section3.scrollIntoView(true);
            break;
            
        case "list-item4":
            const section4 = document.querySelector("#section4")
            section4.scrollIntoView(true);
            break;
            default:
                alert("Something is wrong with this section")
        
    }
})



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


