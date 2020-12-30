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
let section 




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/*Add the total list amount we need*/
function addNavList(num){
   
    for (let i=1 ; i<=num ; i++){     
        const newList = document.createElement("li")
        newList.setAttribute("id","list-item"+i)
        newList.innerText = "section"+i
        navbarUl.appendChild(newList) 
    }
}
addNavList(4)


/*add new section and its children elements*/
function createSection(orderOfSection){
    const newSection = document.createElement("section")
    newSection.innerHTML = 
    `<section id="section${orderOfSection}"> 
    <div class="landing__container"> 
    <h2>Section ${orderOfSection}</h2>
    <p class="section${orderOfSection}-p"></p>
    </div>
    </section>`
    sectionWrapper.appendChild(newSection)
    section = "section"+orderOfSection
}

/*get created list items in the Nav*/
const listItem1 = document.querySelector("#list-item1")
const listItem2 = document.querySelector("#list-item2")
const listItem3 = document.querySelector("#list-item3")
const listItem4 = document.querySelector("#list-item4")



document.addEventListener("click" ,function scroll(event){
   
    /*check if the list item has been created and if the corresponded section has been added to the DOM*/
    if (event.target.id===`list-item${4}` && section==undefined){
            createSection(4) 
    }

   
    switch (event.target.id){
        case "list-item1" :
            section1.scrollIntoView(true);
            listItem1.classList.add("underline")
            listItem2.classList.remove("underline")
            listItem3.classList.remove("underline")
            listItem4.classList.remove("underline")
            break;
        case "list-item2":
            section2.scrollIntoView(true);
            section2.classList.add("your-active-class");
            listItem2.classList.add("underline")
            listItem1.classList.remove("underline")
            listItem3.classList.remove("underline")
            listItem4.classList.remove("underline")
            
            break;
        case "list-item3":
            section3.scrollIntoView(true);
            section3.classList.add("your-active-class");
            listItem3.classList.add("underline")
            listItem1.classList.remove("underline")
            listItem2.classList.remove("underline")
            listItem4.classList.remove("underline")
            
            break;
            
        case "list-item4":
            const section4 = document.querySelector("#section4")
            
            section4.scrollIntoView(true);
            section4.classList.add("your-active-class");
            document.querySelector(".section4-p").innerText = newContent;
            listItem4.classList.add("underline")
            listItem1.classList.remove("underline")
            listItem2.classList.remove("underline")
            listItem3.classList.remove("underline")
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


