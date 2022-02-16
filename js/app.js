// event listener to calculate button 

document.getElementById('calculate-button').addEventListener('click', function(){
    // getting income input
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const incomeInputAmount = parseFloat(incomeInputText);
    
    // clearing the value
    incomeInput.value = "";

    // getting expenses

    // getting food amount

    const foodInput = document.getElementById('food-input');
    const foodInputText = foodInput.value;
    const foodInputAmount = parseFloat(foodInputText);

    // clearing the value
    foodInput.value = "";

    // getting rent amount

    const rentInput = document.getElementById('rent-input');
    const rentInputText = rentInput.value;
    const rentInputAmount = parseFloat(rentInputText);
    
    // clearing the value
    rentInput.value = "";

    // getting clothes amount

    const clothInput = document.getElementById('cloth-input');
    const clothInputText = clothInput.value;
    const clothInputAmount = parseFloat(clothInputText);
    
    // clearing the value
    clothInput.value = "";

    // setting total expenses and balance

    const totalExpense = document.getElementById('total-expense');
    const totalExpenseAmount = foodInputAmount + rentInputAmount + clothInputAmount;
    totalExpense.innerHTML = totalExpenseAmount;

    // setting the balance
    const balance = document.getElementById('balance');
    balance.innerHTML = incomeInputAmount - totalExpenseAmount;
});