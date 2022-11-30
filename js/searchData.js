import { createCard } from './createCard.js';
import { input, cards } from './main.js';
import { newData } from './main.js';

export function searchData() {
  const d = newData.filter(
    (el) =>
      el.title.includes(input.value.trim().toLowerCase()) ||
      el.keywords.includes(input.value.trim().toLowerCase()),
  );
  cards.innerHTML = '';
  d.forEach((item) => cards.append(createCard(item)));
}
