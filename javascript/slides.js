const animals = [
    {
        name: "Fox",
        family: "Mammal",
        funfact: "Foxes make 40 different sounds. Gekkering, a series of guttural chattering, is the most common noise made by foxes.",
        sound: "./assets/audio/fox.mp3",
        img: "./assets/images/fox.jpg",
        answer1: "Boar",
        answer2: "Badger",
        answer3: "Fox",
        answer4: "Skunk",
    },
    {
        name: "Otter",
        family: "Mammal",
        funfact: "Sea Otters are one of the only marine mammals that uses tools. These intelligent animals will use a rock to crack their favorite food open.",
        sound: "./assets/audio/otter.mp3",
        img: "./assets/images/otter.jpg",
        answer1: "Rabbit",
        answer2: "Racoon",
        answer3: "Marmot",
        answer4: "Otter",
    },
    {
        name :"Moose",
        family:"Mammal",
        funfact:"Bull moose shed their antlers each year. Moose often rub their antlers on trees which helps the velvet come off.",
        sound:"./assets/audio/Moose.mp3",
        img:"./assets/images/moose.jpg",
        answer1:"Deer",
        answer2: "Moose",
        answer3:"Buffalo",
        answer4:"Yak",
    }
    ,
    {
        name:"Flamingo",
        family:"Birds",
        funfact:"The word “flamingo” originates from the Spanish word meaning “flame-colored.”",
        sound:"./assets/audio/Flamingo.mp3",
        img:"./assets/images/Flamingo.jpg",
        answer1:"Flamingo",
        answer2:"Owl",
        answer3:"Heron",
        answer4:"Crane",
    }
    ,
    {
        name:"Eagle",
        family:"Birds",
        funfact:"Their Courtship Acrobatics Rival Cirque du Soleil. From high-speed chases to tumbling together, talons locked, from great heights towards the ground, it’s quite a sight.",
        sound:"./assets/audio/Eagle.mp3",
        img:"./assets/images/eagle.jpg",
        answer1:"Falcon",
        answer2:"Vulture",
        answer3:"Eagle",
        answer4:"Kondor",
    }
    ,
    {
        name:"Cricket",
        family:"Insect",
        funfact:"Male crickets produce this chirping sound by rubbing their wings together in a process called “stridulation.”",
        sound:"./assets/audio/cricket.mp3",
        img:"./assets/images/cricket.jpg",
        answer1:"Grasshoper",
        answer2:"Firefly",
        answer3:"Cricket",
        answer4:"Cicada",
    }
    ,
];

    function shuffle(array) {
        for (let i = array.length-1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * i);
            let currentarray = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = currentarray;
        }
        return array
    }


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
let questionNumber = 0;
function createSlide() {
    for (let j = 0; j < buttonQuizz.length; j++) {
        description.style.display = "flex";
        shuffle(animals);
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

for (let h = 0; h < buttonQuizz.length; h++) {
    buttonQuizz[h].addEventListener('click', () => {
        createSlide();
        questionNumber++;
    })
}

export { animals }