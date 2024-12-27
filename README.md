# SeedBonux  
### Because "Seedbonus" wasn't cool enough 😎  

## What is this?  
This is a **TorrentBD Seedbonus Calculator**. It helps you figure out how much time you need to achieve a specific amount of seedpoints based on your current seeding rate, seedbonus, and the number of torrents you're seeding.  

## Features  
- **Double Bonus Mode**: Because sometimes, more is better.  
- Dynamically adjusts the seeding rate based on the number of torrents.  
- Tells you exactly how many hours you need to grind those seedpoints.  

## How to Use  
1. **Input your Current Seedbonus Rate** (Example: `29.84`).  
2. **Enter your Current Seedbonus** (Example: `100.69`).  
3. **Set your Target Seedbonus** (Example: `150000`).  
4. **Specify the Number of Torrents** you're seeding (Example: `10`).  
5. If you're using **Double Bonus Mode**, check the box for an extra boost.  
6. Hit the **Calculate** button and let the magic happen!  

The calculator will display the total hours needed to reach your target.  

## Tech Stack  
- **HTML** for structure  
- **CSS** for styling (dark mode only, because light mode is overrated 🖤)  
- **JavaScript** for logic (featuring some spicy algorithms 🌶️)  

## Files  
- **`index.html`**: The frontend layout.  
- **`styles.css`**: Custom styles to keep it cool.  
- **`script.js`**: The brain behind the operation.  

## Demo Code  
Here's a snippet of the logic for calculating your seedbonus time:  

```javascript
function calculateSeedBonusTime(rate, currentBonus, targetBonus, torrentsCount, isDoubleBonusMode) {
    let hours = 0;

    if (currentBonus >= targetBonus) {
        return hours;
    }

    while (currentBonus < targetBonus) {
        hours++;
        currentBonus += rate;

        if (isDoubleBonusMode) {
            currentBonus += rate;
        }

        rate += 0.1 * torrentsCount;
    }

    return hours;
}
```

## Future Plans  
- Add support for multiple users because sharing is caring.  
- Visualize progress with some dope charts 📊.  
- Maybe even add a light mode (if we feel like it 🙄).  

## Why SeedBonux?  
Because life’s too short to manually calculate seedpoints. Let **SeedBonux** do it for you—while you sip on your coffee and seed your torrents. ☕  
