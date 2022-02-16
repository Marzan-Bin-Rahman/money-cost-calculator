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

function updateValue(inputId, incomeInputAmount, totalExpenseAmount, foodInputAmount, rentInputAmount, clothInputAmount, isAdd){
    const totalExpense = document.getElementById(inputId);
    
    if(isAdd == false){
        
        totalExpense.innerHTML = totalExpenseAmount;
    }
    else{
        balance.innerHTML = incomeInputAmount - totalExpenseAmount;
    }
    // return totalExpenseAmount;
}

// event listener to calculate button 

document.getElementById('calculate-button').addEventListener('click', function(){
    // getting income input

    const incomeInputAmount = getInputValue('income-input');

    /* const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const incomeInputAmount = parseFloat(incomeInputText);
    
    // clearing the value
    incomeInput.value = ""; */

    // getting expenses

    // getting food amount
    const foodInputAmount = getInputValue('food-input');

    /* const foodInput = document.getElementById('food-input');
    const foodInputText = foodInput.value;
    const foodInputAmount = parseFloat(foodInputText);

    // clearing the value
    foodInput.value = ""; */

    // getting rent amount
    const rentInputAmount = getInputValue('rent-input');

    /* const rentInput = document.getElementById('rent-input');
    const rentInputText = rentInput.value;
    const rentInputAmount = parseFloat(rentInputText);
    
    // clearing the value
    rentInput.value = ""; */

    // getting clothes amount
    const clothInputAmount = getInputValue('cloth-input');

    /* const clothInput = document.getElementById('cloth-input');
    const clothInputText = clothInput.value;
    const clothInputAmount = parseFloat(clothInputText);
    
    // clearing the value
    clothInput.value = ""; */
    const totalExpenseAmount = foodInputAmount + rentInputAmount + clothInputAmount;
    // setting total expenses and balance

    /* const totalExpenseAmount = */ updateValue('total-expense', incomeInputAmount, totalExpenseAmount, foodInputAmount, rentInputAmount, clothInputAmount, false);

    /* const totalExpense = document.getElementById('total-expense');
    const totalExpenseAmount = foodInputAmount + rentInputAmount + clothInputAmount;
    totalExpense.innerHTML = totalExpenseAmount; */

    // setting the balance

updateValue('balance', incomeInputAmount, totalExpenseAmount, foodInputAmount, rentInputAmount, clothInputAmount, true);

    /* const balance = document.getElementById('balance');
    balance.innerHTML = incomeInputAmount - totalExpenseAmount; */
});