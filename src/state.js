export let state = {
    currentValue : 0,
    maxValue : 5,
    incCurrentValue : (currentValue, maxValue) => {
        if(currentValue < maxValue) {
            currentValue++;
        }
    }
};