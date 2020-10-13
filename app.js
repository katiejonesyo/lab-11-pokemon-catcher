import data from './data.js';

const roundsPlayed = document.querySelector('.rounds-played')
const radioButtons = document.querySelectorAll('input');
const images = document.querySelectorAll('label > img');

startRound();



//Loops
for (let i = 0; i < radioButtons.length; i++) {
    const eachButton = radioButtons[i];


    //buttons
eachButton.addEventListener('change', (e) => {
    console.log('message')
    
            const userPick = e.target.value;
            console.log(userPick)
    
    
            tallyRounds();
            capturedPokemon(myPokemonArray, userPick);
    
            startRound();
            console.log(myPokemonArray);
        });
}





