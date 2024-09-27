// console.log("button clicked file added")

// step 1 : set event handeller 
document.getElementById('btn.login').addEventListener('click', function(event){

    // step 2 : prevent dafault behavior (reloading browsers) 
    event.preventDefault();

    // step 3 : get the phone number
    const phoneNumber = document.getElementById('phone-number').value;

    // step 4 : get the pin number 
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber , pinNumber);

    // step 5 : cheak the value
    if (phoneNumber === '5' && pinNumber === "1234"){
        console.log('you are logged');
        window.location.href = '/home.html';
    }
    else {
        alert('wrong phone number or pin')
    }
    
})



//  windows.location.href = file path ==== - change the file 
