// remove hidden class in cash out form 
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden')
})


// remove hidden class in add money form 
document.getElementById('btn-show-add-money').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden')
})

