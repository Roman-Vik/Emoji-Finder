import { data } from './data.js';
import { refactorData } from './refactorData.js';
import { searchData } from './searchData.js';
import { createCard } from './createCard.js';


let dataEmoji = await data()
export const  newData = refactorData(dataEmoji);




export const input = document.querySelector('.search__data');
export const cards = document.body.querySelector('.list__wrapper');

newData.forEach((item) => {
  cards.append(createCard(item));
});

input.addEventListener('input', searchData);
