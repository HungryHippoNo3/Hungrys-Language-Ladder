window.addEventListener("DOMContentLoaded", () => {
    fetch("dictionary.txt")
        .then(response => response.text())
        .then(text => {
            const dictionary = JSON.parse(text);

        const randomRowIndex = 1 + Math.floor(Math.random() * (dictionary.length - 1));
        const noun = dictionary[randomRowIndex][0];

        const language1Index = (dictionary.length() - 3) + Math.floor(Math.random() * 3);

        const hint1 = dictionary[0][language1Index] + ": " + dictionary[randomRowIndex][language1Index];

        document.querySelector(".hint-1").textContent = hint1;
    });
});
