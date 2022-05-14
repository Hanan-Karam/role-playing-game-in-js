import {getRandomNumbers, getDicePlaceholder, getHealthPercentage} from "./utiles.js"
//characters constructor
class Character {
    // this.container= data.container 
    // this.title= data.title
    // this.image = data.image
    // this.score= data.score
    // this.diceCount= data.diceCount
    constructor(data){
        Object.assign(this, data)
        this.maxHealth = this.score;
        this.diceArray = getDicePlaceholder(this.diceCount);
    }
    getCharacter(){
        const {container, title, image, score, diceCount, diceArray} = this;
        const healthBar = this.getHealthBar();
        //let diceHTML = this.renderDice(diceCount);
        // document.querySelector(container).innerHTML = `
        return `
        <h1 class="wizard--title">${title}</h1>
        <img src="${image}" alt="wizard image">
        <h2 class="wizard--score">Health: ${score}</h2>
        ${healthBar}
        <div class="dice-container">
        ${diceArray}
        </div>
    
    `
    }

    renderDice(){
            // return getRandomNumbers(this.diceCount).map(num => {
            //     return `<div class="wizard--dice">${num}</div>`
            // }).join(' ');
           this.currentDiceScore = getRandomNumbers(this.diceCount);
           this.diceArray = this.currentDiceScore.map(num => {
               return `<div class="wizard--dice">${num}</div>`
           }).join(' ');
           //return this.diceArray;
        
        }

   takeDamage(attackScore){
        //console.log(`${this.title} is damaged`);
        //console.log(`${this.title}:${attackScore}`);
        const totalAttackScore = attackScore.reduce((total, currentItem) =>{
            return total + currentItem;
        });

        this.score -= totalAttackScore;

        if(this.score <= 0){
            this.score = 0;
            this.isDead = true;
            //console.log(this.isDead);
        }  
        //console.log(getHealthPercentage(this.maxHealth, this.score))  
    }

    getHealthBar(){
        const percentage = getHealthPercentage(this.maxHealth, this.score)
        //console.log(percentage);
        return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percentage < 26 ? "danger" : ""} " 
            style="width: ${percentage}%;">
            </div>
        </div>`
    }

}


export {Character}