// console.log("button clicked file added")

// step 1 : set event handeller 
document.getElementById('btn.login').addEventListener('click', function(event){

    // step 2 : prevent dafault behavior (reloading browsers) 
    event.preventDefault();

    // step 3 : get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
    
})