//*------------------- player ---------------*//
function playerName() {
    let balisePseudo = document.getElementById("pseudo");
    let baliseButton = document.getElementById("myButton");
    let dname = document.getElementById("name");
    let pseudoForm = document.getElementById("formrep")
    let resetButton = document.getElementById("resetButton");

    baliseButton.addEventListener("click", (event) => {
        event.preventDefault();
        dname.innerText = "Hello " + balisePseudo.value + "!";
        dname.style.fontSize = "15px";
        pseudoForm.style.display = "none";
    });

    resetButton.addEventListener("click", (event) => {
        location.reload(event); // location.reload() pour recharger la page
    });
}
playerName();

let elt = document.querySelector('input');
elt.maxLength = 10;

//*------------------- score ---------------*//

const reponses = [
    document.getElementById("answer-hedgehog")
];

function score() {
    let result = 0;
    let scoreElement = document.getElementById("score");


    reponses.forEach((reponse) => {
        reponse.addEventListener("click", () => {
            if (reponse.dataset.rep === "correct") {
                result++;
                scoreElement.textContent = result;
            } else {

            }
        });
    });
}
score();
