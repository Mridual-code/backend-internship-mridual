// 1. Change heading text using getElementById

let heading = document.getElementById("mainHeading");
heading.innerText = "New Heading Text";

// 2. Modify paragraph using querySelector

let paragraph = document.querySelector("#para");
paragraph.innerText = "Paragraph content updated!";

// 3. Select button and log it

let button = document.getElementById("btn");
console.log(button);

// 4. Select multiple elements with same class

let items = document.querySelectorAll(".item");
console.log(items);

// 5. Dynamically update paragraph text

paragraph.innerText = "Text changed using JavaScript";

// 6. Replace div content

let div = document.getElementById("box");
div.innerHTML = "New Div Content Added";

// 7. Change section color on click

let section = document.getElementById("colorSection");

section.addEventListener("click", function () {
    section.style.backgroundColor = "yellow";
});

// 8. Update multiple elements at once

button.addEventListener("click", function () {

    heading.innerText = "Button Clicked";

    paragraph.innerText = "Paragraph Updated";

    div.innerHTML = "Div Updated";
});

// 9. Update text and style together

button.addEventListener("click", function () {

    heading.style.color = "red";

    paragraph.style.fontSize = "20px";

    paragraph.innerText = "Text and Style Updated";
});