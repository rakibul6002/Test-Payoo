// Form submit reloding the page

// Login
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
  
    const phoneNumber = document.getElementById('phone-number').value ;
    const pinNumber = document.getElementById('pin-number').value ;
console.log(phoneNumber,pinNumber);

    if(phoneNumber === '01787175184' && pinNumber === '6002'){
        console.log('You are log in.');
        window.location.href = '/home.html';
    }
   else{   
    alert('Invalied Number or Pin!');
    console.log('Invalied Number or Pin!');
   }
});
 