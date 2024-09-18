document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log(`btn btn clicked :3`);

    const phoneNum = document.getElementById('phone-number').value;
    console.log(phoneNum);
})