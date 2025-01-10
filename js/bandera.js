document.getElementById("language-toggle").addEventListener("click", function () {
    const flagElement = document.getElementById("flag");
    const languageText = document.getElementById("language-text");

    const currentSrc = flagElement.getAttribute("src");
    if (currentSrc.endsWith("en.svg")) {
        flagElement.setAttribute("src", "./assets/es.svg"); 
        languageText.textContent = "ES"; 
    } else {
        flagElement.setAttribute("src", "./assets/en.svg"); 
        languageText.textContent = "EN"; 
    }
});
