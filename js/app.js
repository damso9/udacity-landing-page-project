// Defining selectors for the ul, 'section h2', and section tag
const navUl = document.querySelector("#navbar__list");
const sectionHeadings = document.querySelectorAll("section h2");
const sectionHeadingsID = document.querySelectorAll("section");

// I Appreciate the REVIEW. Thanks for the encouragement. It means a lot! - I'll be pleased to connect  -https://www.linkedin.com/in/damilola-ayodele/
// I Appreciate the REVIEW. Thanks for the encouragement. It means a lot! - I'll be pleased to connect - https://www.linkedin.com/in/damilola-ayodele/

// I Appreciate the REVIEW. Thanks for the encouragement I means a lot! - Damilola Ayodele!

// Creating an empty array to contain the each section ID attribute
const sectionIDarray = [];
// Creating an empty array to contain the height of each section as well as it scroll behaviour
const sectionIDTopCoordinates = [];

// Looping through the sectionHeadingsID Nodelist and push each ID attribute to the
// sectionIDarray defined above
sectionHeadingsID.forEach((sectionHeading) => {
  // Get the top coordinate or each section
  let topHeight = sectionHeading.getBoundingClientRect().top;
  let sectionHeadingTop = topHeight - 50;
  sectionIDTopCoordinates.push({
    top: sectionHeadingTop,
    // left: 0,
    behavior: "auto",
  });

  sectionIDarray.push(sectionHeading.id);

  let sectionHeight = sectionHeading.getBoundingClientRect();
  // sectionHeading.style.border = "2px solid black"
});

/*
Creating and Li element containing a link tag, with each li element appended to the UL parent tag
while also setting the href attribute

*/
sectionHeadings.forEach((heading) => {
  const list = document.createElement("li");

  navUl.appendChild(list);
  //   const link = document.createElement("a");
  //   list.appendChild(link);
  let headingContent = heading.textContent;
  //   link.setAttribute("href", `#${sectionIDarray[index]}`);
  list.innerHTML = `${headingContent}`;
  list.style.padding = "20px 10px";
});

// Select the navUl li items
const navUlListItems = document.querySelectorAll("#navbar__list li");

// scroll event get fired anytime we scroll
window.onscroll = (e) => {
  console.log(window.innerHeight);
  sectionHeadingsID.forEach((section, index) => {
    let elementTop = section.getBoundingClientRect().top;
    let elementBottom = section.getBoundingClientRect().bottom;
    let windowHeight = window.innerHeight;
    //  This add the class when section is within range of the Window Height
    if (elementTop < windowHeight && elementBottom > windowHeight) {
      //   console.log(`Within Range ${index}`);
      section.classList.add("your-active-class");
      navUlListItems[index].classList.add("nav-style");
      navUlListItems[index].style.color = "white";
    }

    //  This add the class when section is out range of the Window Height
    else {
      section.classList.remove("your-active-class");
      navUlListItems[index].classList.remove("nav-style");
      navUlListItems[index].style.color = "black";
    }
  });
};

// this converts the navUlListItems to an array
let arrNav = [...navUlListItems];
navUlListItems.forEach((listItem) => {
  // This gets the index of each listIteman and stores it in the myIndex variable
  let myIndex = arrNav.indexOf(listItem);
  console.log(myIndex);
  // This takes every navUlListitem element and runs the scrollToSection on them when click upon

  listItem.onclick = (e) => {
    console.log(e.target);
    e.target.style.color = "white";
    scrollToSection(sectionIDTopCoordinates[myIndex]);
  };
});

// This function scrolls to a given coordinate according to the parameter given
const scrollToSection = (cordinateParam) => {
  window.scrollTo(cordinateParam);
};
// I Appreciate the REVIEW. Thanks for the encouragement. It means a lot! - I'll be pleased to connect  -https://www.linkedin.com/in/damilola-ayodele/
// I Appreciate the REVIEW. Thanks for the encouragement. It means a lot! - I'll be pleased to connect - https://www.linkedin.com/in/damilola-ayodele/
