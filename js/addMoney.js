
// Add money to the amount
document.getElementById('btn-addMoney').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById('inpt-amount').value;
    const pin = document.getElementById('inpt-pin').value;

    if(pin==='6002'){
        const balence = document.getElementById('balence').innerText;
        const amountNumber = parseFloat(amount);
        const balenceNumber = parseFloat(balence);
        const newBalence = balenceNumber + amountNumber;
        document.getElementById('balence').innerText = newBalence;
         
    }
    else{
        alert('Invalied PIN number!!!')
    }
})

