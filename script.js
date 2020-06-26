const booksList = document.querySelectorAll('.book'),
books = document.querySelector('.books'),
listVisible = booksList[0].querySelectorAll('li'),
listAsinc = booksList[5].querySelectorAll('li'),
es6 = booksList[2].querySelectorAll('li'),
head = booksList[4].querySelector('h2>a'),
adv = document.querySelector('.adv');

books.prepend(booksList[4]);
books.prepend(booksList[0]);
books.prepend(booksList[1]);
books.append(booksList[2]);

document.body.style.background = 'url(../image/you-dont-know-js.jpg)';

head.textContent = 'Книга 3. this и Прототипы Объектов';

adv.style.display = 'none';


listVisible[2].before(listVisible[3]);
listVisible[4].before(listVisible[6]);
listVisible[4].before(listVisible[8]);
listVisible[9].after(listVisible[2]);

listAsinc[2].before(listAsinc[9]);
listAsinc[5].before(listAsinc[2]);
listAsinc[8].before(listAsinc[5]);

es6[8].insertAdjacentHTML('afterend', `
	<li>Глава 8: За пределами ES6</li>
`);