// show cashout form

document.getElementById('cashout-button').addEventListener('click',function(){
    document.getElementById('cashout-form').classList.remove('hidden');
    // hide add money when click cash out button
    document.getElementById('addMoney-form').classList.add('hidden');
})

// show addmoney form

document.getElementById('addMoney-button').addEventListener('click',function(){
    document.getElementById('addMoney-form').classList.remove('hidden');
    // hide add money when click cash out button
    document.getElementById('cashout-form').classList.add('hidden');
})