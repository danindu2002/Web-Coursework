// --------- Loading-Screen script file -----------

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    
    // waiting for 4 seconds before dissappearing 
    setTimeout(() => {
        loader.classList.add("loader--hidden");

        // deleting the loading page preferences after loading the main
        loader.addEventListener("transitionend", () => {
            document.body.removeChild(loader);
        });
    }, 4000);
});  