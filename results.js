import { BAG } from './constants.js';

const item = localStorage.getItem(BAG)
const parsedItem = JSON.parse(item)

const pokemonCaught = parsedItem.map((bagItem) => {
return bagItem.captured;
});

const pokemonLabels = parsedItem.map((bagItem) => {
return bagItem.name;
});

const pokemonEncountered = parsedItem.map((bagItem) => {
return bagItem.encountered;
});



//Chart info goes below 