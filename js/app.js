// creating a function for getting the inputs

function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueText = inputValue.value;
    const inputValueAmount = parseFloat(inputValueText);
    
    // clearing the value
    inputValue.value = "";
    return inputValueAmount;
}

// function to update value

function updateValue(inputId, balanceAmount, totalExpenseAmount, isAdd){
    const totalExpense = document.getElementById(inputId);
    
    if(isAdd == false){
        totalExpense.innerHTML = totalExpenseAmount;
    }
    else{
        balance.innerHTML = balanceAmount;
    }
}

// event listener to calculate button 

document.getElementById('calculate-button').addEventListener('click', function(){

    // getting income input

    const incomeInputAmount = getInputValue('income-input');
    
    // getting expenses

    // getting food amount

    const foodInputAmount = getInputValue('food-input');

    // getting rent amount

    const rentInputAmount = getInputValue('rent-input');

    // getting clothes amount

    const clothInputAmount = getInputValue('cloth-input');

    // getting the total expense

    const totalExpenseAmount = foodInputAmount + rentInputAmount + clothInputAmount;

    // setting total expenses and balance

    const balanceAmount = incomeInputAmount - totalExpenseAmount;
    const userIncome = document.getElementById('user-income');
    userIncome.innerHTML = incomeInputAmount;
    if(isNaN(userIncome)){
        userIncome.innerHTML = 00;
    }
    // erorr handler 

    if(incomeInputAmount<0 || isNaN(incomeInputAmount)){
        alert("You have to give a number as income value");
    }
    else if(foodInputAmount<0 || isNaN(foodInputAmount)){
        alert("You have to give a number as food value");
    }
    else if(rentInputAmount<0 || isNaN(rentInputAmount)){
        alert("You have to give a number as rent value");
    }
    else if(clothInputAmount<0 || isNaN(clothInputAmount)){
        alert("You have to give a number as cloth value");
    }
    else if(totalExpenseAmount>incomeInputAmount||balanceAmount<0){
        alert('Your expense is much higher than your income')
    }
    else{
        updateValue('total-expense', balanceAmount, totalExpenseAmount, false);
        // setting the balance

        updateValue('balance', balanceAmount, totalExpenseAmount, true);
    }
});



// savings button

document.getElementById('save-button').addEventListener('click', function(){
    
    //about saving amount

    const userIncome = document.getElementById('user-income').innerHTML;
    const saveInputAmount = getInputValue('save-input');
    const savingAmount = document.getElementById('saving-amount');
    const savingAmountTotal = parseInt(parseFloat(userIncome) * saveInputAmount / 100);
    
    // updating remaining balance

    const balance = document.getElementById('balance').innerHTML;
    const balanceAmount = parseFloat(balance);
    const remainingBalanceInput = document.getElementById('remaining-balance');

    // erorr handler 

    if(balanceAmount<savingAmountTotal){
        alert('Your savings must be less than your remaining money after expenses');
    }
    else if(isNaN(savingAmountTotal)|| savingAmountTotal<0){
        alert("Please give a real number!");
    }
    else{
        // saving amount displaying
        
    savingAmount.innerHTML = savingAmountTotal;

    // about reamining balance
    
    remainingBalanceInput.innerHTML = balanceAmount - savingAmountTotal;
    }
})