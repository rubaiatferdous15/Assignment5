function getInputValue(id){
   const inputValue = document.getElementById(id).value;
   const inputNumber = parseFloat(inputValue);
   return inputNumber;
}


function getTotal(id1,a){
    const total = parseFloat(document.getElementById(id1).innerText)+parseFloat(a);
    
     return document.getElementById(id1).innerText = total;


     
    
}


function totalBalance(id,b){
    const overall = parseFloat (document.getElementById(id).innerText);

    const leftBalance = parseFloat(overall) - parseFloat(b);

    return  document.getElementById('total-balance').innerText = parseFloat(leftBalance);


}


function showElementbyId(id){
    document.getElementById('donation-tab').classList.add('hidden');
    document.getElementById('history-tab').classList.add('hidden');


    document.getElementById(id).classList.remove('hidden');
}