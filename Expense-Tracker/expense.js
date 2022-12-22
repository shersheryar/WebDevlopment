const addExpense = document.getElementById('add-expense')
const item = document.getElementById('name')
const date = document.getElementById('date')
const amount = document.getElementById('amount')
const table = document.querySelector('table')
const caption = document.querySelector('caption')





const expenseData = (e)=>{
e.preventDefault();
// alert('no items added yet');


const tableTr = document.createElement('tr')
const tableTd_1 = document.createElement('td')
const tableTd_2 = document.createElement('td')
const tableTd_3 = document.createElement('td')
const tableTd_4 = document.createElement('td')

caption.remove();
tableTr.classList.add('expense-detail')
table.appendChild(tableTr)
tableTr.appendChild(tableTd_1);
tableTr.appendChild(tableTd_2);
tableTr.appendChild(tableTd_3);
tableTr.appendChild(tableTd_4);


tableTd_1.innerText = item.value
tableTd_2.innerText = date.value
tableTd_3.innerText = `$${amount.value}`
tableTd_4.innerHTML= `<i class="fas fa-times-circle"></i>`

item.value=""
date.value=""
amount.value=""


tableTd_4.addEventListener('click', (()=>table.removeChild(tableTr)))


};
addExpense.addEventListener('click', expenseData)  