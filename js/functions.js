document.getElementById('noakhali-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const addMoney = getInputValue('noakhali-donation');
    console.log(addMoney);

    if (isNaN(addMoney)) {
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

    const currentDate = new Date();

    const p = document.createElement('p');
    p.innerText = `${addMoney} is donated for Flood Relief in Noakhali,Bangladesh\n${currentDate}`;

    p.classList.add('h-[136px]', 'w-[1140px]', 'bg-gray-200', 'p-3', 'text-black', 'flex', 'items-center', 'mx-auto', 'my-4', 'rounded-lg');

    const historyTab = document.getElementById('history-tab');
    historyTab.insertBefore(p, historyTab.firstChild);
});





document.getElementById('feni-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney1 = getInputValue('feni-donation');
    console.log(addMoney1);

    if(isNaN(addMoney1)){
        alert("NOOOOO");
        return;
    }

    const totalBalanceAll = parseFloat(document.getElementById('total-balance').innerText);

    
    if (addMoney1 > totalBalanceAll) {
        alert("Donation amount cannot exceed total available balance!");
        return;
    }

    

     const total2 = getTotal('feni-balance',addMoney1);

     const left  = totalBalance('total-balance',total2);

     const currentDate = new Date();

     const p = document.createElement('p');
     p.innerText = `${addMoney1} is donated for Flood in Feni,Bangladesh
     ${currentDate}`
     
     p.classList.add('h-[136px]', 'w-[1140px]', 'bg-gray-200', 'p-3', 'text-black', 'flex', 'items-center', 'mx-auto', 'my-4', 'rounded-lg');

     const historyTab = document.getElementById('history-tab');
     historyTab.insertBefore(p, historyTab.firstChild);





})


document.getElementById('quota-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney2 = getInputValue('quota-donation');
    console.log(addMoney2);

    if(isNaN(addMoney2)){
        alert("NOOOOO");
        return;
    }

    const totalBalanceAll = parseFloat(document.getElementById('total-balance').innerText);

    
    if (addMoney2 > totalBalanceAll) {
        alert("Donation amount cannot exceed total available balance!");
        return;
    }


    

    
    const total3 = getTotal('quota-balance',addMoney2);
    const left  = totalBalance('total-balance',total3);

    const currentDate = new Date();


    const p = document.createElement('p');
    p.innerText = `${addMoney2} is donated for Quota Movement in Bangladesh
    ${currentDate}`

    p.classList.add('h-[136px]', 'w-[1140px]', 'bg-gray-200', 'p-3', 'text-black', 'flex', 'items-center', 'mx-auto', 'my-4', 'rounded-lg');


    const historyTab = document.getElementById('history-tab');
    historyTab.insertBefore(p, historyTab.firstChild);


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



