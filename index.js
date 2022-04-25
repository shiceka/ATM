let balance = 0;

const myDeposit = (event) => {
    
    let deposit = document.getElementById("deposit").value;
  
    if (deposit < 0) {
    document.getElementById("message"
        ).innerHTML = `<h2 style ="color: red" >
        Please insert a valid amount to deposit!!!</h2>`;
     }
    else{
     balance += parseInt(deposit,10);
     document.getElementById('display').innerHTML = balance;
    }
    reset();
};

const myWithdrawal = (event) =>{

    let withrawal = document.getElementById("withdraw").value;
    if(withrawal > balance || balance < 0){
        document.getElementById("message").innerHTML = `<h2 style="color: red" >
        Insufficient funds!</h2>`
    }
    else{
     balance -= parseInt(withrawal,10);
     document.getElementById('display').innerHTML = balance;
    }
    reset();
};

const reset = () =>{
    document.getElementById("deposit").value = " ";
    document.getElementById("withdraw").value = " ";
}