const containerEl = document.querySelector(".container");

const careers = ["Web Developer", "YouTuber", "Instructor", "Designer"];
let careerIndex = 0;
let characterIndex = 0;

function typeWriter () {
    containerEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
    characterIndex++;

    if (characterIndex > careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(typeWriter, 200);
};

typeWriter();