document.getElementById('noakhali-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInputValue('noakhali-donation');
    console.log(addMoney);


    if(isNaN(addMoney)){
        alert("NOOOOO");
        return;
    }


    

    


    const total1 = getTotal('noakhali-balance',addMoney);

   

    const left  = totalBalance('total-balance',total1);


})




document.getElementById('feni-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney1 = getInputValue('feni-donation');
    console.log(addMoney1);

    if(isNaN(addMoney1)){
        alert("NOOOOO");
        return;
    }
    

     const total2 = getTotal('feni-balance',addMoney1);

     const left  = totalBalance('total-balance',total2);




})


document.getElementById('quota-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney2 = getInputValue('quota-donation');
    console.log(addMoney2);

    if(isNaN(addMoney2)){
        alert("NOOOOO");
        return;
    }

    
    const total3 = getTotal('quota-balance',addMoney2);
    const left  = totalBalance('total-balance',total3);




})



