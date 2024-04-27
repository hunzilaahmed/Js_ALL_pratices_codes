// let expenses = [];
// let totalAmount = 0;

// const categorySelect = document.getElementById("Category_select");
// const amountInput = document.getElementById("amount_input");
// const dateInput = document.getElementById("date_input");
// const addBtn = document.getElementById("add_btn");
// const bodyExp = document.getElementById("table_body");
// const totalAmountCell = document.getElementById("total_amount");

// addBtn.addEventListener("click", function () {
//   const category = categorySelect.value;
//   const amount = Number(amountInput.value);
//   const date = dateInput.value;
//   if (category === " ") {
//     alert(" Please Enter your category");
//     return;
//   }
//   if (isNaN(amount) || amount <= 0) {
//     alert("Amount Error");
//     return;
//   }
//   if (!date) {
//     alert(" Please select a date");
//     return;
//   }
//   expenses.push({ category, amount, date });

//   totalAmount += amount;
//   totalAmountCell.textContent = totalAmount;

//   const newRow = bodyExp.insertRow();
//   const categoryCell = newRow.insertCell();
//   const amountCell = newRow.insertCell();
//   const dateCell = newRow.insertCell();
//   const deleteCell = newRow.insertCell();

//   const deleteBtn = document.createElement("button");

//   deleteBtn.textContent = "Delete";
//   deleteBtn.classList.add("delete-btn");
//   deleteBtn.addEventListener("click", function () {
//     expenses.splice(expenses.indexOf(), 1);
//     totalAmount = expenses.amount;
//     totalAmountCell.textContent = totalAmount;
//     bodyExp.removeChild(newRow);
//   });
//   const expense = expenses[expenses.length - 1];
//   categoryCell.textContent = expense.category;
//   amountCell.textContent = expense.amount;
//   deleteBtn.textContent = expense.date;
//   deleteCell.appendChild(deleteBtn);
// });
// for (const expense of expenses) {
//   totalAmount += amount;
//   totalAmountCell.textContent = totalAmount;

//   const newRow = bodyExp.insertRow();
//   const categoryCell = newRow.insertCell();
//   const amountCell = newRow.insertCell();
//   const dateCell = newRow.insertCell();
//   const deleteCell = newRow.insertCell();

//   const deleteBtn = document.getElementById("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.classList.add("addBtn-btn");
//   deleteBtn.addEventListener("click", function () {
//     expenses.slice(expenses.indexOf(), 1);
//     totalAmount = expenses.amount;
//     totalAmountCell.textContent = totalAmount;
//     bodyExp.removeChild(newRow);
//   });
//   const expense = expenses[expenses.length - 1];
//   categoryCell.textContent = expense.category;
//   amountCell.textContent = expense.amount;
//   deleteBtn.textContent = expense.date;
//   deleteCell.appendChild(deleteBtn);
// }

let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById("Category_select");
const amountInput = document.getElementById("amount_input");
const dateInput = document.getElementById("date_input");
const addBtn = document.getElementById("add_btn");
const bodyExp = document.getElementById("table_body");
const totalAmountCell = document.getElementById("total_amount");
const deleteBtnAll = document.getElementById("delete_btn");

deleteBtnAll.addEventListener("click", function () {
  bodyExp.textContent = "";
  totalAmountCell.textContent = "";
  totalAmount = 0;
  expenses = [];
});

addBtn.addEventListener("click", function () {
  const category = categorySelect.value;
  const amount = Number(amountInput.value);
  const date = dateInput.value;

  if (category.trim() === "") {
    alert("Please Enter your category");
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert("Amount Error");
    return;
  }

  if (!date) {
    alert("Please select a date");
    return;
  }

  expenses.push({ category, amount, date });
  totalAmount += amount;
  totalAmountCell.textContent = totalAmount;
  totalAmountCell.classList.add("total");

  const newRow = bodyExp.insertRow();
  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();
  categoryCell.classList.add("cell");
  amountCell.classList.add("cell");
  dateCell.classList.add("cell");
  deleteCell.classList.add("cell");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    const index = Array.from(bodyExp.children).indexOf(newRow);
    totalAmount -= expenses[index].amount;
    totalAmountCell.textContent = totalAmount;
    expenses.splice(index, 1);
    bodyExp.removeChild(newRow);
  });
  const ind = expenses.length - 1;
  const expense = expenses[ind];
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);

  amountInput.value = "";
  dateInput.value = "";
  categorySelect.value = "";
});

// let arr=[{ct,dat,amou},{cat,am,dat}]
// let lastIndex=arr.length-1
