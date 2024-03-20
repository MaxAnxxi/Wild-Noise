
  function shuffle(array) {
    for (let i = array.length-1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        let currentarray = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = currentarray;
    }
    return array
}

