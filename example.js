// const tableId = document.getElementById('age-table');
// console.log(tableId);

// const allLabelsInTable = document.querySelectorAll('table label');
// console.log(allLabelsInTable);

// const firstTd = document.querySelector('td');
// console.log(firstTd);

// const formSearch = document.querySelector('[name = "search"]');
// console.log(formSearch);


const openBtn = document.querySelector('.open-menu');
const closeBtn = document.querySelector('.close-menu');
const menu = document.querySelector('.menu')

const toggleMenu = () => {
    menu.classList.toggle('menu-closed')
}

openBtn.addEventListener('click', toggleMenu)
closeBtn.addEventListener('click', toggleMenu)





