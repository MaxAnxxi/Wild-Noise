//*------------------- playerName ---------------*//
let balisePseudo = document.getElementById("pseudo");
let resetButton = document.getElementById("resetButton");
let baliseButton = document.getElementById("myButton");
let dname = document.getElementById("name");
let pseudoForm = document.getElementById("formrep")


//*------------------- playerName ---------------*//
function playerName() {

    baliseButton.addEventListener("click", (event) => {
        event.preventDefault();
        dname.innerText = "Hello " + balisePseudo.value + "!";
        dname.style.fontSize = "15px";
        pseudoForm.style.display = "none";
    });
}
playerName();

let elt = document.querySelector('input');
elt.maxLength = 10;

//*------------------- score ---------------*//
const reponses = [
    document.getElementById("answer-hedgehog"),
    document.getElementById("answer-squirrel"),
    document.getElementById("answer-hamster"),
    document.getElementById("answer-beaver")
];


let result = 0;

function score() {
    let scoreElement = document.getElementById("score");

    reponses.forEach((reponse) => {
        reponse.addEventListener("click", () => {
            if (reponse.dataset.rep === "correct") {
                result++;
                scoreElement.textContent = result;
            }
        });
    });
}
score();

//*------------------- numberQuizz ---------------*//

import { animals } from "./slides.js";
console.log(animals);

const numberQz = [
    document.getElementById("numberQuiz")
];


let numbertabl = animals.length + 1;
console.log(numbertabl);
numberQuiz.textContent = numbertabl;


//*------------------- conclusion ---------------*//



// const
const elementHtml = [
    document.getElementById("answer-hedgehog"),
    document.getElementById("answer-squirrel"),
    document.getElementById("answer-hamster"),
    document.getElementById("answer-beaver")
];

// init
let conclusionFinal = document.getElementById("arguments")
let nbclick = 0;

//ma function
function conclusion() {

    console.log("click")

    elementHtml.forEach((question) => {
        question.addEventListener("click", () => {
            nbclick++;

            if (result < numbertabl / 2) {
                console.log("test1")
                conclusionFinal.innerText = (balisePseudo.value + " Get out a bit more !");
            }
            if (result === numbertabl) {
                console.log("test2")
                conclusionFinal.innerText = (balisePseudo.value + " Is that you tarzan ???");
            }
            if (result < numbertabl / 3) {
                console.log("test2")
                conclusionFinal.innerText = (balisePseudo.value + " Well done you're a certified parisian !");
            }
            if (nbclick === numbertabl) {
                resetButton.style.visibility = "visible";
            }
        });
    });
}
conclusion()



//*------------------- réessayer ---------------*//
resetButton.addEventListener("click", (event) => {
    location.reload(event);
})
