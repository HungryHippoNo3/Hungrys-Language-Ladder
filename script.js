window.addEventListener("DOMContentLoaded", () => {
    fetch("dictionary.txt")
        .then(response => response.text())
        .then(text => {
            const dictionary = JSON.parse(text);

        const randomRowIndex = 1 + Math.floor(Math.random() * (dictionary.length - 1));
        const noun = dictionary[randomRowIndex][0];

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

        document.querySelector(".button").addEventListener("click", () => {
            const userInput = document.querySelector(".input").value.trim().toLowerCase();

            const validNounCheck = dictionary.some(row => row[0].toLowerCase() === userInput);

            const gameLadder = document.getElementById("game-ladder");

            function createLadderRung(text) {
                const rung = document.createElement("div");
                rung.classList.add("ladder-rung");

                box.textContent = text;
                gameLadder.appendChild(rung);
            }

            if (validNounCheck) {
                if (userInput === noun) {
                    console.log("Correct! The noun is: " + noun);
                } else {
                    createLadderRung("❌ That is not the correct noun.");
                    }
            } else {
                document.querySelector(".textbox").value = "Invalid guess.";
        }});
})});
