// CashOut to the amount

document.getElementById('btn-cashout').addEventListener('click', function(event){
    event.preventDefault();

    const cashAmount = document.getElementById('cashout-amount').value;
    const newCashAmount = parseFloat(cashAmount);
    
    const cashoutPin = document.getElementById('cashout-pin').value;
    if(cashoutPin === '6002'){
        const availableBalence = document.getElementById('balence').innerText;
        const cashoutBalenceNumber = parseFloat(availableBalence);
        const newamount = cashoutBalenceNumber - newCashAmount;
       document.getElementById('balence').innerText=newamount;
        
        
        
    }
    else{
        alert('Invalied PIN number!!!')
    }
    
})