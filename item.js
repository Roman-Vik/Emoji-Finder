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

const newCart = document.body.querySelector('.list__wraper')

data.forEach((el) => newCart.append(card(el)))










//console.log(card())

// document.body.querySelector('.list__wraper').append(card);