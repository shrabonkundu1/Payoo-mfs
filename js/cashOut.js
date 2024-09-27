// add money to the account 
// step 1 :add event handeller.  prevent page reload after form submit
// step 2: get money to be added to the form
// step 3 :  get the pin number provider , get the pin number, verify the pin number
// step 4 : get the current balance
// step 5 : add addMoneyInput with balance
// step 6 : Update the balance in the UI Dom



// add an event handeler to the add money button inside the form 
document.getElementById('btn-cashout-money').addEventListener('click',function(event){

    // prevent page reload after form submit
    event.preventDefault();

    // get money to be added to the form
    const cashOutValue =  document.getElementById('input-cashout-money').value;
    console.log(cashOutValue);



    // get the pin number provider
    const inputCashOutPin =  document.getElementById('input-cash-out-pin').value;
    console.log(inputCashOutPin);

    // verify the pin number
    if(inputCashOutPin === '1122'){
        // 
        // *** alert('adding money successfully');

        // get the current balance
        const currentBalance  = document.getElementById('current-balance').innerText;
        console.log(currentBalance);
        // 

        // add addMoneyInput with balance
        const cashOutNumber = parseFloat(cashOutValue);
        const currentBalanceNumber = parseFloat(currentBalance);
        const newBalance = currentBalanceNumber - cashOutNumber;
        console.log(newBalance);
        // 

        // Update the balance in the UI Dom
        document.getElementById('current-balance').innerText = newBalance;
        // 
    }
    else{
        alert('incorrect the pin number');
    }

    
})
