document.getElementById('btn-cash-out-money').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutMoneyInput = document.getElementById('input-cash-out-money').value; 
    console.log(cashOutMoneyInput);

    const pinNumber = document.getElementById('cash-out-input-pin-number').value;
    console.log(pinNumber);

    if(pinNumber === '12345') {
        console.log('cashing out money...');

        const balance = document.getElementById('acc-balc').innerText;
        console.log(balance);

        const newBalance = parseFloat(balance) - parseFloat(cashOutMoneyInput);
        console.log(newBalance);

        document.getElementById('acc-balc').innerText = newBalance
    }
    else{
        alert('please try again')
    }
});
