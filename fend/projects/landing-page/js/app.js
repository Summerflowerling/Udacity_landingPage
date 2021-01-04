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
let totalSectionNumber = 3; //initial 
let newList;




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/





/*add new section and its children elements*/
function createSection(numberOfSection){
    
    for(let i=1 ; i<=numberOfSection ; i++){
        totalSectionNumber++;
        let newSection = document.createElement("section")
        newSection.innerHTML = 
    `<section id="section${3+i}"> 
    <div class="landing__container"> 
    <h2>Section ${3+i}</h2>
    <p class="section${3+i}-p"></p>
    </div>
    </section>`
    sectionWrapper.appendChild(newSection)
  
    }
}

document.addEventListener("onload", createSection(3))


/*add listItem*/
function addNavList(totalSectionNumber){
   
    for (let i=1 ; i<=totalSectionNumber ; i++){     
         newList = document.createElement("li")
        newList.setAttribute("id","list-item"+i)
        newList.textContent = `section${i}`
        //newList.innerHTML = `<a href=# class="sectionLink">section ${i}</a>`
        navbarUl.appendChild(newList) 
        
        
    }
}

       
addNavList(totalSectionNumber);

// Scroll to section on list item click
navbarUl.addEventListener("click",function(event){
    event.preventDefault()
    
    // remove active style to section when not being view
    for (let i=0 ; i<document.querySelectorAll(".highLight").length ; i++){

        document.querySelectorAll(".highLight")[i].classList.remove("highLight")

     }
     //add active style to the section that is being viewd
    document.querySelector(`#${event.target.textContent}`).scrollIntoView()
            event.target.classList.add("highLight")

      
}) 











// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Set sections as active


