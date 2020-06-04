function balance() {
    var continueaddingValues;
    var initialAmount;
    var income;
    var expenses;
    var sumOfAllIncomes;
    var sumOfAllExpenses;
    var counter;
    var balance;
    var incomeArray;
    var expensesArray;
    counter = 0;
    initialAmount = prompt("What Is The Amount Of Money In Your Bank Account?");
    income = prompt("What Is Your Income?");
    sumOfAllIncomes = 0;
    sumOfAllExpenses = 0;
    expenses = prompt("What Are Your Expenses?");
    incomeArray = [];
    expensesArray = [];
    continueaddingValues = true;
    incomeArray.push(income);
    expensesArray.push(expenses);
    while (continueaddingValues == true) {
        if(income == "") {
            continueaddingValues = false;
            counter = counter - 1;
        }
        else if(income != "") {
            counter = counter + 1;
            continueaddingValues = true;
            income = prompt("What Is Your Income?");
            expenses = prompt("What Are Your Expenses?");
            incomeArray.push(income);
            expensesArray.push(expenses);
        }
    }
    for(var i = 0; i <= counter; i = i + 1) {
        sumOfAllIncomes = sumOfAllIncomes + parseInt(incomeArray[i]);
    }
    for(var j = 0; j <= counter; j = j + 1) {
        sumOfAllExpenses = sumOfAllExpenses + parseInt(expensesArray[j]);
    }
    balance = parseInt(initialAmount) + sumOfAllIncomes - sumOfAllExpenses;
    window.alert("Total Balance: " + balance);
}