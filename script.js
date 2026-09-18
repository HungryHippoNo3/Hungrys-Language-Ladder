window.addEventListener("DOMContentLoaded", () => {
    fetch("dictionary.txt")
        .then(response => response.text())
        .then(text => {
            const dictionary = JSON.parse(text);

        const randomRow = dictionary[Math.floor(Math.random() * dictionary.length)];
        const noun = randomRow[0];

        const language1 = randomRow[20, 21, 22][Math.floor(Math.random() * 3)];

        const hint1 = language1 + ": " + randomRow[language1];

        document.querySelector(".hint-1").textContent = hint1;
    });
});
