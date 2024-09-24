document.getElementById('noakhali-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const addMoney = getInputValue('noakhali-donation');
    console.log(addMoney);

    if (isNaN(addMoney)|| addMoney<=0) {
        alert("NOOOOO");
        return;
    }

    

    const totalBalanceAll = parseFloat(document.getElementById('total-balance').innerText);

    if (addMoney > totalBalanceAll) {
        alert("Donation amount cannot exceed total available balance!");
        return;
    }

    
    const left = totalBalance('total-balance', addMoney);
    

    const total1 = getTotal('noakhali-balance', addMoney);

    openModal();

   

    const currentDate = new Date();

    const p = document.createElement('p');
    p.innerText = `${addMoney} is donated for Flood Relief in Noakhali,Bangladesh\n${currentDate}`;

    p.classList.add(  'w-full',        
        'max-w-5xl',       
        'bg-gray-200',     
        'p-3',             
        'text-black',      
        'flex',           
        'items-center',    
        'mx-auto',         
        'my-4',            
        'rounded-lg',     
        'shadow-lg' );

    const historyTab = document.getElementById('history-tab');
    historyTab.insertBefore(p, historyTab.firstChild);

    alert(`You Have donated ${addMoney} for Flood Relief in Noakhali,Bangladesh!`);
    

 
    
});





document.getElementById('feni-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney1 = getInputValue('feni-donation');
    console.log(addMoney1);

    if(isNaN(addMoney1)|| addMoney1<=0){
        alert("NOOOOO");
        return;
    }

    const totalBalanceAll = parseFloat(document.getElementById('total-balance').innerText);

    
    if (addMoney1 > totalBalanceAll) {
        alert("Donation amount cannot exceed total available balance!");
        return;
    }

    

     

     const left  = totalBalance('total-balance',addMoney1);
     const total2 = getTotal('feni-balance',addMoney1);

     openModal();

     const currentDate = new Date();

     const p = document.createElement('p');
     p.innerText = `${addMoney1} is donated for Flood in Feni,Bangladesh
     ${currentDate}`
     
     p.classList.add(  'w-full',        
        'max-w-5xl',       
        'bg-gray-200',     
        'p-3',             
        'text-black',      
        'flex',           
        'items-center',    
        'mx-auto',         
        'my-4',            
        'rounded-lg',     
        'shadow-lg' );

     const historyTab = document.getElementById('history-tab');
     historyTab.insertBefore(p, historyTab.firstChild);



     alert(`You Have donated ${addMoney1} for Flood in Feni,Bangladesh!`);
     return;




})


document.getElementById('quota-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney2 = getInputValue('quota-donation');
    console.log(addMoney2);

    if(isNaN(addMoney2)|| addMoney2<=0){
        alert("NOOOOO");
        return;
    }

    const totalBalanceAll = parseFloat(document.getElementById('total-balance').innerText);

    
    if (addMoney2 > totalBalanceAll) {
        alert("Donation amount cannot exceed total available balance!");
        return;
    }


    

    
    
    const left  = totalBalance('total-balance',addMoney2);
    const total3 = getTotal('quota-balance',addMoney2);

    openModal();

    const currentDate = new Date();


    const p = document.createElement('p');
    p.innerText = `${addMoney2} is donated for Quota Movement in Bangladesh
    ${currentDate}`

    p.classList.add(  'w-full','max-w-5xl',       
        'bg-gray-200',     
        'p-3',             
        'text-black',      
        'flex',           
        'items-center',    
        'mx-auto',         
        'my-4',            
        'rounded-lg',     
        'shadow-lg' );


    const historyTab = document.getElementById('history-tab');
    historyTab.insertBefore(p, historyTab.firstChild);

    alert(`You Have donated ${addMoney2} for Quota Movement,Bangladesh!`);



})



document.getElementById('donation-btn').addEventListener('click',function(){
    showElementbyId('donation-tab');
    document.getElementById('donation-btn').classList.add('bg-green-200')
    document.getElementById('history-btn').classList.remove('bg-green-200')
})

document.getElementById('history-btn').addEventListener('click',function(){
    showElementbyId('history-tab');
    document.getElementById('donation-btn').classList.remove('bg-green-200')
    document.getElementById('history-btn').classList.add('bg-green-200')

    
})



