const currentSeedBonusRate = document.getElementById("currentSBR");
const currentSeedBonus = document.getElementById("currentSB");
const targetSeedBonus = document.getElementById("targetSB");
const torrentCount = document.getElementById("numberOfTorrents");
const calcButton = document.getElementById("calcButton");
const answerBox = document.getElementById("answerBox")


function displayResponse(response){
    answerBox.innerHTML = ""

    const heading = document.createElement("h3")
    heading.textContent="The total time needed is "
    const responseSpan = document.createElement("span");
    responseSpan.id = "response";
    responseSpan.textContent = response + " hours";
    heading.appendChild(responseSpan);

// Append the h3 to the div
    answerBox.appendChild(heading);
}


function solve(n, c, x, e) {
    let i = 0;
    n = parseFloat(n);
    c = parseFloat(c);
    x = parseFloat(x);
    e = parseFloat(e);

    if (c >= x) {
        return i;
    }

    while (c < x) {
        i += 1;
        c += n;
        n = n + (0.1 * e);
    }

    return i;
}

calcButton.addEventListener("click", () => {
    const result = solve(
        currentSeedBonusRate.value,
        currentSeedBonus.value,
        targetSeedBonus.value,
        torrentCount.value
    );
    displayResponse(result)
    console.log(result);
});
