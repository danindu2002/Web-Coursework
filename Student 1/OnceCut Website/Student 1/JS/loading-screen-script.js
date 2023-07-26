// --------- Loading-Screen script file -----------


window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    
    // waiting for 4 seconds before dissappearing 
    setTimeout(() => {
        loader.classList.add("loader--hidden");
        window.location.href = "../Student-2/home.html";   /*NOTE: Only this line was added after the submission when linking our web pages together because the home page has to be displayed after the loading screen disappears.*/

        // deleting the loading page preferences after loading the main
        loader.addEventListener("transitionend", () => {
            document.body.removeChild(loader);
        });
    }, 4000);
});  