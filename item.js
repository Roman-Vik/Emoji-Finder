import { data } from './emoji.js'

function card({symbol, title, keywords}) {

  const lItem = document.createElement('div');
  const lUnicode = document.createElement('p');
  const lName = document.createElement('p');
  const lText = document.createElement('p');

  lItem.className = 'list__item';
  lUnicode.className = 'list__unicode';
  lName.className = 'list__name';
  lText.className = 'list__text';

  lUnicode.textContent = symbol;
  lName.textContent = title
  lText.textContent = keywords;

  lItem.append(lUnicode);
  lItem.append(lName)
  lItem.append(lText)
return lItem

}

const cards = document.body.querySelector('.list__wraper');
data.forEach((item) => cards.append(card(item)));

let input = document.querySelector('.search__data')

function searchData() {
  const d = data.filter(el => el.title.includes(input.value)||el.keywords.includes(input.value) )
  cards.innerHTML = ''
  d.forEach((item) => cards.append(card(item)));
  console.log(d)

} 

input.addEventListener('input', searchData)
