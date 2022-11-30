import { data } from './emoji.js';
import { refactorData } from './refactorData.js';
import { searchData } from './searchData.js';
import { createCard } from './createCard.js';

export const  newData = refactorData(data);

export const input = document.querySelector('.search__data');
export const cards = document.body.querySelector('.list__wraper');

newData.forEach((item) => {
  cards.append(createCard(item));
});

input.addEventListener('input', searchData);
