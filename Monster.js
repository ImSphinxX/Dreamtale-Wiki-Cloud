function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const windowHeight = window.innerHeight;
    const sectionHeight = section.clientHeight;
    const offset = (windowHeight - sectionHeight) / 100;

    //scorrimento:
    section.scrollIntoView({ behavior: "smooth", block: "center" });
    window.scrollBy(0, -offset);
    document.getElementById(sectionId).style.backgroundColor = "rgb(57, 57, 57)";

    //colorazione sfondo.
    var allElements = document.querySelectorAll("[id]");
    allElements.forEach(function(element) {
        if (!element.classList.contains("card") && element.id !== sectionId) {
            element.style.backgroundColor = "rgb(17, 17, 17)";
        }
    });

    //colorazione per il paragrafo condiviso
    var firstParagraphBackgroundColor = window.getComputedStyle(document.getElementById("Undead-txt")).backgroundColor;
    document.getElementById("Shared-txt").style.backgroundColor = firstParagraphBackgroundColor;
}