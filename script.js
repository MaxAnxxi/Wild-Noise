const bouton = [
    document.getElementById("answer-hedgehog"),
    document.getElementById("answer-squirrel"),
    document.getElementById("answer-hamster"),
    document.getElementById("answer-beaver"),
]

const description = document.getElementById("description-hedgehog");

function showdescription(tableaubouton) {
    tableaubouton.forEach((answer) => answer.addEventListener("click", () => {
        description.style.display = "inline-flex";
    }))
};

showdescription(bouton);