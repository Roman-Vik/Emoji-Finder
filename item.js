import { data } from './emoji.js';
console.log(data);
function card({ symbol, title, keywords }) {
  const lItem = document.createElement('div');
  const lUnicode = document.createElement('p');
  const lName = document.createElement('p');
  const lText = document.createElement('p');

  lItem.className = 'list__item';
  lUnicode.className = 'list__unicode';
  lName.className = 'list__name';
  lText.className = 'list__text';

  lUnicode.textContent = symbol;
  lName.textContent = title;
  lText.textContent = keywords;

  lItem.append(lUnicode);
  lItem.append(lName);
  lItem.append(lText);
  return lItem;
}

const cards = document.body.querySelector('.list__wraper');

data.forEach((item) => {
  let str = item.keywords;

  function removeDubl(keywords) {
    return keywords
      .split(' ')
      .filter((item, i, arr) => {
        return arr.lastIndexOf(item) === i;
      })
      .join(' ');
  }

  item.keywords = removeDubl(str);
});

let input = document.querySelector('.search__data');

function searchData() {
  const d = data.filter(
    (el) =>
      el.title.includes(input.value.trim().toLowerCase()) ||
      el.keywords.includes(input.value.trim().toLowerCase()),
  );
  cards.innerHTML = '';
  d.forEach((item) => cards.append(card(item)));
}
input.addEventListener('input', searchData);
