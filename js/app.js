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
/* function handle(nam, balanceAmount, totalExpenseAmount){
    const nami = toString(nam);
    if(nami>0 && typeof nami == 'number'){
        
        updateValue('total-expense', balanceAmount, totalExpenseAmount, false);
    // setting the balance

        updateValue('balance', balanceAmount, totalExpenseAmount, true);
    }
    else{
        alert("there is problem in" + nami);
    }
} */
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
    const balanceAmount = incomeInputAmount - totalExpenseAmount;
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
    /* if(typeof totalExpenseAmount == 'number' && typeof balanceAmount == 'number' && totalExpenseAmount > 0 && balanceAmount > 0){
        updateValue('total-expense', balanceAmount, totalExpenseAmount, false);
    // setting the balance

        updateValue('balance', balanceAmount, totalExpenseAmount, true);
    }
    else{
        alert('Please, give the values carefully!');
    } */

  /*   handle(incomeInputAmount, balanceAmount, totalExpenseAmount)
    handle(foodInputAmount, balanceAmount, totalExpenseAmount)
    handle(rentInputAmount, balanceAmount, totalExpenseAmount)
    handle(clothInputAmount, balanceAmount, totalExpenseAmount) */

    /* const totalExpense = document.getElementById('total-expense');
    const totalExpenseAmount = foodInputAmount + rentInputAmount + clothInputAmount;
    totalExpense.innerHTML = totalExpenseAmount; */

    

    /* const balance = document.getElementById('balance');
    balance.innerHTML = incomeInputAmount - totalExpenseAmount; */
});