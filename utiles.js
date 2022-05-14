//getting random number
function getRandomNumbers(diceCount){
    const diceArr = new Array(diceCount).fill(0).map(() =>{
        return Math.floor(Math.random()*6) +1
    })
    return diceArr
}

function getDicePlaceholder(diceCount){
    const diceArr = new Array(diceCount).fill(0).map(() =>{
        return `<div class="placeholder-dice"></div>`
    }).join(' ')
    return diceArr;
}

const getHealthPercentage = (maxHealth, remainingHealth) => {
    return (100 * remainingHealth) / maxHealth 
}

export {getRandomNumbers, getDicePlaceholder, getHealthPercentage}