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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// Defining selectors for the ul, 'section h2', and section tag
const navUl = document.querySelector('#navbar__list')
const sectionHeadings = document.querySelectorAll('section h2')

const sectionHeadingsID = document.querySelectorAll('section')

// Creating an empty array to contain the each section ID attribute
const sectionIDarray = []

// Looping through the sectionHeadingsID Nodelist and push each ID attribute to the
// sectionIDarray defined above
sectionHeadingsID.forEach((sectionHeading) => {
    // console.log(sectionHeading.id)
    sectionIDarray.push(sectionHeading.id)

    let sectionHeight = sectionHeading.getBoundingClientRect()
    console.log(sectionHeight)
})

console.log(sectionHeadings)
console.log(sectionIDarray)

/*
Creating and Li element containing a link tag, with each li element appended to the UL parent tag
while also setting the href attribute

*/
    sectionHeadings.forEach((heading, index) => {
        const list = document.createElement('li')


        navUl.appendChild(list)
        const link = document.createElement('a');
        list.appendChild(link)
        let headingContent = heading.textContent
        link.setAttribute('href', `#${sectionIDarray[index]}`)
        link.innerHTML = `${headingContent}`
        list.style.color = "black"
 

    })
    // scroll event get fired anytime we scroll
    window.onscroll = (e) => {
        console.log(window.innerHeight)
         sectionHeadingsID.forEach((section,index) => {
             let elementTop = section.getBoundingClientRect().top
             let elementBottom = section.getBoundingClientRect().bottom
             let windowHeight = window.innerHeight
            //  This add the class when section is within range
             if ( elementTop < windowHeight ) {
                 console.log(`Within Range ${index}`)
                 section.classList.add('your-active-class')
                //  section.style.border = '2px solid red'

             }
            //  This removes the class when section is out of  range

             if ( elementBottom < windowHeight ) {
                 section.classList.remove('your-active-class')
                 section.style.border = 'none'
                
             }

             console.log(`${section.getBoundingClientRect().top} ${index}`  )
         })
    }

/**
 * 
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


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


