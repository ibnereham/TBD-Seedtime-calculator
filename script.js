const currentSeedBonusRateInput = document.getElementById("currentSBR");
const currentSeedBonusInput = document.getElementById("currentSB");
const targetSeedBonusInput = document.getElementById("targetSB");
const torrentCountInput = document.getElementById("numberOfTorrents");
const calcButton = document.getElementById("calcButton");
const answerBox = document.getElementById("answerBox");
const doubleBonusCheckbox = document.getElementById("doubleBonus");

function displayResponse(response) {
    answerBox.innerHTML = "";
    const heading = document.createElement("h3");
    heading.textContent = "The total time needed is ";
    const responseSpan = document.createElement("span");
    responseSpan.id = "response";
    responseSpan.textContent = `${response} hours`;
    heading.appendChild(responseSpan);
    answerBox.appendChild(heading);
}

function calculateSeedBonusTime(rate, currentBonus, targetBonus, torrentsCount, isDoubleBonusMode) {
    rate = parseFloat(rate);
    currentBonus = parseFloat(currentBonus);
    targetBonus = parseFloat(targetBonus);
    torrentsCount = parseFloat(torrentsCount);

    let hours = 0;

    if (currentBonus >= targetBonus) {
        return hours;
    }

    while (currentBonus < targetBonus) {
        hours += 1;
        currentBonus += rate;

        if (isDoubleBonusMode) {
            currentBonus += rate; 
        }

        rate += 0.1 * torrentsCount;
    }

    return hours;
}

calcButton.addEventListener("click", () => {
    const rate = currentSeedBonusRateInput.value;
    const currentBonus = currentSeedBonusInput.value;
    const targetBonus = targetSeedBonusInput.value;
    const torrentsCount = torrentCountInput.value;
    const isDoubleBonusMode = doubleBonusCheckbox.checked;

    const result = calculateSeedBonusTime(rate, currentBonus, targetBonus, torrentsCount, isDoubleBonusMode);
    displayResponse(result);
    console.log(result);
});
