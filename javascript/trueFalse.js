const question1 = [ 
    document.getElementById("answer-hedgehog"),
    document.getElementById("answer-squirrel"),
    document.getElementById("answer-hamster"),
    document.getElementById("answer-beaver")
]

function correctorbad(tableaubouton) {
    tableaubouton.forEach((answer) => answer.addEventListener("click", () => { 
        if (answer.dataset.rep === "correct" ) {
            answer.classList.add('goodanswer'); 
        }
    
        else {
            answer.classList.add("badanswer");

        }

        tableaubouton.forEach((bouton) => bouton.disabled = true);

    }));
    };


correctorbad(question1);
