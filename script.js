document.getElementById("add-expense").addEventListener("click", function() {
    const expenseName = document.getElementById("expense-name").value;
    const expenseAmount = document.getElementById("expense-amount").value;

    if (expenseName && expenseAmount) {
        const expenseList = document.getElementById("expense-list");
        const li = document.createElement("li");
        li.innerHTML = `${expenseName} - ${expenseAmount} <button onclick="deleteExpense(this, ${expenseAmount})">Delete</button>`;
        expenseList.appendChild(li);

        updateTotal(parseFloat(expenseAmount));

        document.getElementById("expense-name").value = '';
        document.getElementById("expense-amount").value = '';
    }
});

function deleteExpense(element, amount) {
    element.parentElement.remove();
    updateTotal(-amount);
}

function updateTotal(amount) {
    const totalAmountElement = document.getElementById("total-amount");
    const currentTotal = parseFloat(totalAmountElement.innerText);
    totalAmountElement.innerText = (currentTotal + amount).toFixed(2);
}
