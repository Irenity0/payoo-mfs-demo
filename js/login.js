document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNum = document.getElementById('phone-number').value;
    const pinNum = document.getElementById('pin-number').value;
    
    
    console.log(phoneNum);
    console.log(pinNum);

    if(phoneNum === '5' && pinNum === '010101'){
        console.log('you are logged in');
        window.location.href = 'home.html';
    }
    else{
        alert('Wrong phone number or pin');
    }
}) 