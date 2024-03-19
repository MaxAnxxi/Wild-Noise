const answerQuizz = document.getElementsByClassName("button-quizz");


function Timer() {
    for (let i = 0; i < answerQuizz.length; i++) {
        answerQuizz[i].addEventListener('click', () => {
            setTimeout(() => {
                console.log("Yo");
            }, 3000);
        })
    }
}
