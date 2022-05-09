// Defining selectors for the ul, 'section h2', and section tag
const navUl = document.querySelector("#navbar__list");
const sectionHeadings = document.querySelectorAll("section h2");
const sections = document.querySelectorAll("section");

let windowHeight = window.innerHeight;
let navListIdArray = [];

// I Appreciate the REVIEW. Thanks for the encouragement. It means a lot! - I'll be pleased to connect  -https://www.linkedin.com/in/damilola-ayodele/
// I Appreciate the REVIEW. Thanks for the encouragement. It means a lot! - I'll be pleased to connect - https://www.linkedin.com/in/damilola-ayodele/

// I Appreciate the REVIEW. Thanks for the encouragement I means a lot! - Damilola Ayodele!

// Creating an empty array to contain the each section ID attribute
const sectionIDarray = [];

// Loops through the  sections Nodelist and push the sectionID to the navListIdArray
sections.forEach((sectionHeading) => {
  sectionIDarray.push(sectionHeading.id);
  let listClass = sectionHeading.getAttribute("id");
  navListIdArray.push(listClass);
});

// Creating and Li element containing a link tag, with each li element appended to the UL parent tag
// while setting the class attribute of each li to the navListIdArray elements
sectionHeadings.forEach((heading, index) => {
  const list = document.createElement("li");

  navUl.appendChild(list);
  let headingContent = heading.textContent;
  list.innerHTML = `${headingContent}`;
  list.style.padding = "20px 10px";
  list.setAttribute("class", `${navListIdArray[index]}`);
});

// Select the navUl li items
const navUlListItems = document.querySelectorAll("#navbar__list li");

// scroll event get fired anytime we scroll
window.onscroll = (e) => {
  console.log(window.innerHeight);
  let current = "";
  sections.forEach((section, index) => {
    // Gets cordinates of top and bottom of section
    let sectionTop = section.getBoundingClientRect().top;
    let sectionBottom = section.getBoundingClientRect().bottom;

    // Add active when within range
    if (window.innerHeight >= sectionTop) {
      current = section.getAttribute("id");
      section.classList.add("active");
      console.log(`${sectionTop} ${index}`);
    }
    // Remove active when out of range
    if (sectionTop <= 0 && sectionBottom < window.innerHeight) {
      section.classList.remove("active");
    }
    // Remove active when out of range
    if (sectionTop > window.innerHeight && sectionBottom > window.innerHeight) {
      section.classList.remove("active");
    }
  });
  
  // Adds required active to the Navigation Li element
  navUlListItems.forEach((listItem) => {
    listItem.classList.remove("active");
    if (listItem.classList.contains(current)) {
      listItem.classList.add("active");
    }
  });
};

// Target each li when click perform a scroll to the respective section element
navUlListItems.forEach((listItem, index) => {
  listItem.onclick = (e) => {
    console.log(e.target);
    let sectionTop = sections[index].offsetTop;
    console.log(sectionTop);
    scrollToSection({
      top: sectionTop,
      left: 0,
      behavior: "smooth",
    });
  };
});

// This function scrolls to a given coordinate according to the parameter given
const scrollToSection = (cordinateParam) => {
  window.scrollTo(cordinateParam);
};
// I Appreciate the REVIEW. Thanks for the encouragement. It means a lot! - I'll be pleased to connect  -https://www.linkedin.com/in/damilola-ayodele/
// I Appreciate the REVIEW. Thanks for the encouragement. It means a lot! - I'll be pleased to connect - https://www.linkedin.com/in/damilola-ayodele/
