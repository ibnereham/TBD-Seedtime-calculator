const currentSeedBonusRateInput = document.getElementById("currentSBR");
const currentSeedBonusInput = document.getElementById("currentSB");
const targetSeedBonusInput = document.getElementById("targetSB");
const torrentCountInput = document.getElementById("numberOfTorrents");
const doubleBonusCheckbox = document.getElementById("doubleBonus");
const doubleBonusDurationInput = document.getElementById("doubleBonusDuration");
const calcButton = document.getElementById("calcButton");
const answerBox = document.getElementById("answerBox");

// Disable the Double Bonus Duration input by default
doubleBonusDurationInput.disabled = true;

// Enable or disable the Double Bonus Duration input based on checkbox state
doubleBonusCheckbox.addEventListener("change", () => {
    doubleBonusDurationInput.disabled = !doubleBonusCheckbox.checked;
});

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

function calculateSeedBonusTime(rate, currentBonus, targetBonus, torrentsCount, isDoubleBonusMode, doubleBonusDuration) {
    rate = parseFloat(rate) || 0;
    currentBonus = parseFloat(currentBonus) || 0;
    targetBonus = parseFloat(targetBonus) || 0;
    torrentsCount = parseFloat(torrentsCount) || 0;
    doubleBonusDuration = parseFloat(doubleBonusDuration) || 0;

    if (currentBonus >= targetBonus || rate <= 0 || torrentsCount <= 0) {
        return 0; // If conditions are unrealistic, return 0 hours.
    }

    let hours = 0;
    let doubleBonusActive = isDoubleBonusMode ? doubleBonusDuration : 0;

    while (currentBonus < targetBonus) {
        hours++;

        if (isDoubleBonusMode && doubleBonusActive > 0) {
            currentBonus += 2 * rate; // Apply double bonus
            doubleBonusActive--; // Decrease active double bonus duration
        } else {
            currentBonus += rate; // Apply normal bonus
        }

        rate += 0.1 * torrentsCount; // Increment rate after every hour
    }

    return hours;
}

calcButton.addEventListener("click", () => {
    const rate = currentSeedBonusRateInput.value;
    const currentBonus = currentSeedBonusInput.value;
    const targetBonus = targetSeedBonusInput.value;
    const torrentsCount = torrentCountInput.value;
    const isDoubleBonusMode = doubleBonusCheckbox.checked;
    const doubleBonusDuration = doubleBonusCheckbox.checked ? doubleBonusDurationInput.value : 0;

    const result = calculateSeedBonusTime(rate, currentBonus, targetBonus, torrentsCount, isDoubleBonusMode, doubleBonusDuration);
    displayResponse(result);
    console.log(result);
});
