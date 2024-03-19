const animals = [
    {
        name: "Fox",
        family: "Mammal",
        funfact: "Foxes make 40 different sounds. Gekkering, a series of guttural chattering, is the most common noise made by foxes.",
        sound: "./assets/audio/fox.mp3",
        img: "./assets/images/fox-3053706_1280.jpg",
        answer1: "Boar",
        answer2: "Badger",
        answer3: "Skunk",
        answer4: "Fox",
    },

];
const animalDescription = document.getElementById("text-hedgehog");
const listAnimal = animalDescription.getElementsByTagName("li");
const buttonQuizz = document.getElementsByClassName("button-quizz");
const animalSound = document.getElementById("audio-hedgehog");
const animalImg = document.getElementById("img-hedgehog");

function createSlide(){
    for(let i =0 ; i < animals.length;i++){
        for (let j = 0; j < buttonQuizz.length; j++) {
            buttonQuizz[j].addEventListener('click', () => {
                setTimeout(() => {
                    console.log("Yo Change sound")
                    animalSound.pause();
                    animalSound.currentTime = 0;
                    animalSound.src=animals[i].sound;
                    animalImg.src=animals[i].img;
                    buttonQuizz[0].textContent=animals[i].answer1;
                    buttonQuizz[1].textContent=animals[i].answer2;
                    buttonQuizz[2].textContent=animals[i].answer3;
                    buttonQuizz[3].textContent=animals[i].answer4;
                    buttonQuizz[j].style.backgroundColor = "#D4EED3";
                    listAnimal[0].textContent=animals[i].name;
                    listAnimal[1].textContent=animals[i].family;
                    listAnimal[2].textContent=animals[i].funfact;
                    for(let k=0; k < buttonQuizz.length;k++){
                        if(buttonQuizz[k].innerHTML === animals[i].name){
                            buttonQuizz[k].setAttribute("data-rep","correct");
                            console.log("Good Answer");
                        }
                        else{
                            buttonQuizz[k].removeAttribute("data-rep");
                            console.log("Bad Answer");
                        }
                    }
                    }
        , 3000);
                
            })
        }
}
}

createSlide();
