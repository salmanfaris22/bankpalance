


let balance = 0




function deposit() {

    let depo = document.getElementById('depo').value
    depo = Number(depo)
    
    if ( depo > 0) {
        balance += depo;
      
        document.getElementById('depo').value = "";
        alert(`Thanks For deposit 
            deposited ammount : ${depo}
            `)
       
    } else{
        alert('Please enter a valid deposit amount');
        document.getElementById('depo').value = "";
    }

}

function widrow() {
   
    let wid = document.getElementById('wid').value
    

    if ( wid > 0 && balance >= wid) {
        balance -= wid
        document.getElementById('wid').value = "";
        alert(`Thanks For widrow 
            widrow ammount : ${wid}
            `)

       
    }else{
        document.getElementById('wid').value = "";
        alert(`
            Please enter a valid deposit amount
            pleas cheack your bank Balance
            `);
        
 
    }
}

function cheackBalance() {
    console.log("current balacnce id :" + balance)
    document.getElementById("bankBalance").innerHTML="Your Balace Is : "+balance+"$";
    
}




