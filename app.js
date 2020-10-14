import { data } from './data.js';
import { BAG } from './constants.js';

const roundsPlayed = document.querySelector('.rounds-played')
const radioButtons = document.querySelectorAll('input')
const images = document.querySelectorAll('label > img');

const pokeResults = [];


for (let i = 0; i < radioButtons.length; i++) {

    radioButtons[i].addEventListener('change', (e) => {
        radioButtons.forEach((radio) => {

            let pokemon = findById(pokeResults, Number(radio.value));

            if (!pokemon) {

                const newPokemon = findById(data, Number(radio.value));

                pokemon = {

                    id: Number(radio.value),

                    name: newPokemon.pokemon,

                    encountered: 1,

                    captured: 0,

                }

                pokeResults.push(pokemon);

            } else {

                pokemon.encountered++;

            }   

        })

        const capturedPokemon = findById(pokeResults, Number(e.target.value));

        capturedPokemon.captured++;

        tallyRounds();

        if ( accumulator < 10){

            startRound();

        }

        document.getElementById('one').checked = false;

        document.getElementById('two').checked = false;

        document.getElementById('three').checked = false;

        setInLocalStorage(BAG, pokeResults);

    });



let accumulator = 0;


function tallyRounds() {

    accumulator = accumulator + 1;

    roundsPlayed.textContent = accumulator;


    if (accumulator === 10) {

        roundsPlayed.textContent = accumulator;


        alert('Game Complete. Click OK to see your results.');

        window.location = './results.html';

    }    

    return accumulator

}


function getRandomPokemon(dataArray) {

    const index = Math.floor(Math.random() * dataArray.length);

    return dataArray[index];

}

function startRound() {


    let pokemonOne = getRandomPokemon(data);

    let pokemonTwo = getRandomPokemon(data);

    let pokemonThree = getRandomPokemon(data);


    while (pokemonTwo.id === pokemonOne.id) {

        pokemonTwo = getRandomPokemon(data)

    }

    while (pokemonThree.id === pokemonOne.id || pokemonThree.id === pokemonTwo.id) {

        pokemonThree = getRandomPokemon(data)

    }


    radioButtons[0].value = pokemonOne.id

    images[0].src = pokemonOne.url_image;


    radioButtons[1].value = pokemonTwo.id

    images[1].src = pokemonTwo.url_image;


    radioButtons[2].value = pokemonThree.id

    images[2].src = pokemonThree.url_image;

}


function setInLocalStorage(key, value) {

    const stringyKey = JSON.stringify(value);

    localStorage.setItem(key, stringyKey);

    return stringyKey;

}

function findById(diceArray, diceId) {

    for (let i = 0; i < diceArray.length; i++) {

        const myDice = diceArray[i];

        if (myDice.id === diceId) {

            return myDice;

        } 

    }

}
startRound();
};