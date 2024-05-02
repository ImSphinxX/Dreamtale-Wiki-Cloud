function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const windowHeight = window.innerHeight;
    const sectionHeight = section.clientHeight;
    const offset = (windowHeight - sectionHeight) / 100; // Calcolo dell'offset per centrare verticalmente

    section.scrollIntoView({ behavior: "smooth", block: "center" }); // Scorrimento centrato
    window.scrollBy(0, -offset); // Correzione per centrare verticalmente
    document.getElementById(sectionId).style.backgroundColor = "rgb(57, 57, 57)";
    
    var allElements = document.querySelectorAll("[id]");
    allElements.forEach(function(element) {
        if (!element.classList.contains("card") && element.id !== sectionId) {
            element.style.backgroundColor = "rgb(17, 17, 17)";
        }
    });
}