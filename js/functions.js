document.getElementById('noakhali-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInputValue('noakhali-donation');
    console.log(addMoney);


    

    const total1 =parseFloat(document.getElementById('noakhali-balance').innerText)+parseFloat(addMoney);
    console.log(total1);


    document.getElementById('noakhali-balance').innerText = total1;




})




document.getElementById('feni-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney1 = getInputValue('feni-donation');
    console.log(addMoney1);


    

    const total2 =parseFloat(document.getElementById('feni-balance').innerText)+parseFloat(addMoney1);
    console.log(total2);


    document.getElementById('feni-balance').innerText = total2;




})


document.getElementById('quota-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInputValue('quota-donation');
    console.log(addMoney);


    

    const total1 =parseFloat(document.getElementById('quota-balance').innerText)+parseFloat(addMoney);
    console.log(total1);


    document.getElementById('quota-balance').innerText = total1;




})



