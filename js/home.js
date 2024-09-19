document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-add-money').value; 
    console.log(addMoneyInput);

    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(pinNumber);

    if(pinNumber === '12345') {
        console.log('adding money...');

        const balance = document.getElementById('acc-balc').innerText;
        console.log(balance);

        const newBalance = parseFloat(balance) + parseFloat(addMoneyInput);
        console.log(newBalance);

        document.getElementById('acc-balc').innerText = newBalance
    }
    else{
        alert('please try again')
    }
});

