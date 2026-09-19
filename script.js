window.addEventListener("DOMContentLoaded", () => {
    fetch("dictionary.txt")
        .then(response => response.text())
        .then(text => {
            const dictionary = JSON.parse(text);

        const randomRowIndex = 1 + Math.floor(Math.random() * (dictionary.length - 1));
        const noun = string(dictionary[randomRowIndex][0]);

        const language1Index = int((dictionary[0].length - 3) + Math.floor(Math.random() * 3));

        const hint1 = string(dictionary[0][language1Index]) + ": " + string(dictionary[randomRowIndex][language1Index]);

        console.log("Random Row Index:", randomRowIndex);
        console.log("Noun:", noun);
        console.log("Language 1 Index:", language1Index);
        console.log("Hint 1:", hint1);

        document.querySelector(".hint-1").textContent = hint1;
    });
});
