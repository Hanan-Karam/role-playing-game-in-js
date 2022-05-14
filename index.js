import charactersData from "./data.js"
import { Character } from "./Character.js";

const wizardCharacter = new Character(charactersData.wizard);
//const orcCharacter = new Character(charactersData.orc);

let monstersArray = ["orc", "demon", "goblin"];
let isWaiting = false;
function getMonsterData(){
    let nextMonester = charactersData[monstersArray.shift()];
    return nextMonester ? new Character(nextMonester) :{};
 }

let monster = getMonsterData();

function render(){
    document.querySelector(wizardCharacter.container).innerHTML = wizardCharacter.getCharacter();
    document.querySelector(monster.container).innerHTML =monster.getCharacter();

}

const attackButton =document.querySelector('.attack');
//const resetButton =document.querySelector('.reset');

render();

//console.log(wizardCharacter)


function attack(){
    //console.log('button is working');
    if(!isWaiting){
        wizardCharacter.renderDice();
        monster.renderDice();
        wizardCharacter.takeDamage(monster.currentDiceScore);
        monster.takeDamage(wizardCharacter.currentDiceScore);
        render();
        if(wizardCharacter.isDead){
            endGame();
        } else if (monster.isDead){
            isWaiting = true;
            if(monstersArray.length > 0){
                setTimeout(() =>{
                    monster = getMonsterData()
                    render()
                    isWaiting = false;
                }, 2000)
            }else{
                endGame()
            }
        }
    }
}
attackButton.addEventListener('click', attack);


function endGame(){
    isWaiting =true;
    const message = wizardCharacter.isDead && monster.isDead ?  "It's An Even - Both Are Dead" 
        : wizardCharacter.score > 0 ? "Wizard Has Won" 
        : "Monester Has Won";

    const emoji = wizardCharacter.isDead && monster.isDead ?  "☠️" 
        : monster.isDead ? "🔮" 
        : "☠️";
        //console.log(message + emoji);
    setTimeout(() =>{
        document.querySelector('.container').innerHTML =  `
        <div class="end-game">
            <h2>Game Over !!</h2>
            <h3>${message}</h3>
            <p class="end-emoji">${emoji}</p>
        </div>` ;
        attackButton.style.display = "none";
    }, 2000)

        //toggleButtons();

}

// function toggleButtons(){
//     resetButton.style.display = "block";
// }

// function resetGame(){
//     console.log("reset")
//     document.querySelector('.container').innerHTML = ;
// }


//resetButton.addEventListener('click', resetGame);
