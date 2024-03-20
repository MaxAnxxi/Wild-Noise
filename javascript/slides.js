const animals = [
    {
        name: "Fox",
        family: "Mammal",
        funfact: "Foxes make 40 different sounds. Gekkering, a series of guttural chattering, is the most common noise made by foxes.",
        sound: "./assets/audio/fox.mp3",
        img: "./assets/images/fox.jpg",
        answer1: "Boar",
        answer2: "Badger",
        answer3: "Skunk",
        answer4: "Fox",
    },
    {
        name: "Otter",
        family: "Mammal",
        funfact: "Sea Otters are one of the only marine mammals that uses tools. All of their favorite foods need to be cracked open to eat, so these intelligent animals will use a rock to crack them open. Sea otters will even store these rock tools in a little pouch under their armpits to use later",
        sound: "./assets/audio/otter.mp3",
        img: "./assets/images/otter.jpg",
        answer1: "Rabbit",
        answer2: "Racoon",
        answer3: "Marmot",
        answer4: "Otter",
    }
    // {

    // }

];
const animalDescription = document.getElementById("text-hedgehog");
const listAnimal = animalDescription.getElementsByTagName("li");
const buttonQuizz = document.getElementsByClassName("button-quizz");
const animalSound = document.getElementById("audio-hedgehog");
const animalImg = document.getElementById("img-hedgehog");
const answer = [
    document.getElementById("answer-hedgehog"),
    document.getElementById("answer-squirrel"),
    document.getElementById("answer-hamster"),
    document.getElementById("answer-beaver")
]
const description = document.getElementById("description-hedgehog");
let questionNumber=0;
function createSlide() {
    for (let j = 0; j < buttonQuizz.length; j++) {
        for (let i = questionNumber; i < animals.length; i++) {
                setTimeout(() => {
                    answer.forEach((button) => {
                        button.disabled = false;
                    });
                    if (buttonQuizz[j].classList.contains("goodanswer")) {
                        buttonQuizz[j].classList.remove("goodanswer");
                    }
                    else {
                        buttonQuizz[j].classList.remove("badanswer");
                    }
                    animalSound.pause();
                    animalSound.currentTime = 0;
                    animalSound.src = animals[i].sound;
                    animalImg.src = animals[i].img;
                    buttonQuizz[0].textContent = animals[i].answer1;
                    buttonQuizz[1].textContent = animals[i].answer2;
                    buttonQuizz[2].textContent = animals[i].answer3;
                    buttonQuizz[3].textContent = animals[i].answer4;
                    listAnimal[0].textContent = animals[i].name;
                    listAnimal[1].textContent = animals[i].family;
                    listAnimal[2].textContent = animals[i].funfact;
                    for (let k = 0; k < buttonQuizz.length; k++) {
                        if (buttonQuizz[k].innerHTML === animals[i].name) {
                            buttonQuizz[k].setAttribute("data-rep", "correct");
                        }
                        else {
                            buttonQuizz[k].removeAttribute("data-rep");
                        }
                    }
                    description.style.display = "none";
                }
                    , 3000);
            break;
        }   
    }   
}

for(let h=0; h<buttonQuizz.length;h++){
    buttonQuizz[h].addEventListener('click', () =>{
        createSlide();
        questionNumber++;
    })
}