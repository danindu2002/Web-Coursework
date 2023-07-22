// --------- Top Rated Movies script file ----------- 


// Get all the navigation links and sections
const navLinks = document.querySelectorAll('.navLink');
const sections = document.querySelectorAll('.sections');
const lastBlocks = document.querySelectorAll('.lastBlocks');

// checking if the elemnt is in the viewport
function isInViewport(element){
    const rect = element.getBoundingClientRect();
    return(
        rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth
    )
}

// setting acive tab according to the scrolling position
function setActiveTab(){
    let activeIndex = -1;

    sections.forEach((section,i) => {
        if(isInViewport(section)){
            activeIndex = i;
        }
    })
    lastBlocks.forEach((lastBlock,i) => {
        if(isInViewport(lastBlock)){
            activeIndex = i;
        }
    })
    if(activeIndex >= 0){
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[activeIndex].classList.add('active');
    }
}
setActiveTab();

// adding an event listner to scroll
window.addEventListener('scroll', setActiveTab)
