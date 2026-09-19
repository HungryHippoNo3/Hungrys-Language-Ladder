window.addEventListener("DOMContentLoaded", () => {

    let dictionary;
    let noun;
    let hint1, hint2, hint3, hint4, hint5, hint6, hint7, hint8

    fetch("dictionary.txt")
        .then(response => response.text())
        .then(text => {
            dictionary = JSON.parse(text);

            const randomRowIndex = 1 + Math.floor(Math.random() * (dictionary.length - 1));
            noun = dictionary[randomRowIndex][0];

            const language1Index = (dictionary[0].length - 3) + Math.floor(Math.random() * 3);
            const language2Index = (dictionary[0].length - 6) + Math.floor(Math.random() * 3);
            const language3Index = (dictionary[0].length - 9) + Math.floor(Math.random() * 3);
            const language4Index = (dictionary[0].length - 13) + Math.floor(Math.random() * 4);
            const language5Index = (dictionary[0].length - 15) + Math.floor(Math.random() * 2);
            const language6Index = (dictionary[0].length - 19) + Math.floor(Math.random() * 4);
            const language7Index = (dictionary[0].length - 22) + Math.floor(Math.random() * 3);
            const language8Index = (dictionary[0].length - 24) + Math.floor(Math.random() * 2);

            const hint1 = dictionary[0][language1Index] + ": " + dictionary[randomRowIndex][language1Index];
            const hint2 = dictionary[0][language2Index] + ": " + dictionary[randomRowIndex][language2Index];
            const hint3 = dictionary[0][language3Index] + ": " + dictionary[randomRowIndex][language3Index];
            const hint4 = dictionary[0][language4Index] + ": " + dictionary[randomRowIndex][language4Index];
            const hint5 = dictionary[0][language5Index] + ": " + dictionary[randomRowIndex][language5Index];
            const hint6 = dictionary[0][language6Index] + ": " + dictionary[randomRowIndex][language6Index];
            const hint7 = dictionary[0][language7Index] + ": " + dictionary[randomRowIndex][language7Index];
            const hint8 = dictionary[0][language8Index] + ": " + dictionary[randomRowIndex][language8Index];

            document.querySelector(".hint-1").textContent = hint1;
        });

    const button = document.querySelector(".button");
    const textbox = document.querySelector(".textbox");

    button.addEventListener("click", () => {
        const guessInput = textbox.value.trim().toLowerCase();

        textbox.value = "";

        const guessValidation = dictionary.some(
            row => row[0].toLowerCase() === guessInput
        );

        if (guessValidation) {

            if (guessInput === noun.toLowerCase()) {
                alert("Congratulations! You guessed the correct noun: " + noun);
            } else {
                alert("Incorrect guess. Try again!");
            }

        } else {
            alert("Not a valid guess");
        }

    });

});
