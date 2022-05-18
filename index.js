let balance = 0;
let accounts = [];

const accId = () => {
  let val = Math.floor(1000 + Math.random() * 9000);
  return val;
};

const regDetail = () => {
  let userName = document.getElementById("r-username").value;
  let userEmail = document.getElementById("r-email").value;
  reset();
  document.getElementById('registering').style.display='none';

  let accountHolder = {
    accNum: accId(),
    userName: userName,
    userEmail: userEmail,
    balance: 0,
  };

   let regdeets = [JSON.parse(localStorage.getItem("account"))][0]

   if(regdeets === null){
    accounts.push(accountHolder);
    let newObj = localStorage.getItem("account")||"[]"
    let newbie = [...JSON.parse(newObj), accountHolder] 
    return localStorage.setItem("account", JSON.stringify(newbie));  
   }
   


  for(let i = 0; i < regdeets.length; i++){
    if(userEmail ===  regdeets[i].userEmail){
      return alert("Well that email unfortunately... is already in use!");
      // break;
    }
    accounts.push(accountHolder);
    let newObj = localStorage.getItem("account")||"[]"
    let newbie = [...JSON.parse(newObj), accountHolder] 
    return localStorage.setItem("account", JSON.stringify(newbie));  
  }

// var item = localStorage.getItem("Users Data: ");
// var arrayobjfromls = JSON.parse(item);
// var found = false;
// for (var i = 0; i < arrayobjfromls.length; i++) {
//     if(users.UserName === arrayobjfromls[i].UserName) {
//         found = true;
//         break;
//     }
// }
// if ( found ) {
//     alert("This username is already in use. Please try another.");
// } else {
//     array.push( users );
//     localStorage.setItem("Users Data: ", JSON.stringify(array));
// }
};

const logDetail = () => {
  let logdeets = [JSON.parse(localStorage.getItem("account"))][0];
  let userEmail = document.getElementById("l-email").value;
  return logdeets.filter(acc => acc.userEmail === logdeets.userEmail)
  reset();
  document.getElementById("login").style.display ='none';
};

const myDeposit = (event) => {
  let deposit = document.getElementById("deposit").value;
  if (deposit < 0) {
    document.getElementById("message").innerHTML = `<h2 style ="color: red" >
        Please insert a valid amount to deposit!!!</h2>`;
    setTimeout(() => {
      document.getElementById("message").style.display = "none";
    }, 2000);
  } else {
    balance += parseInt(deposit, 10);
    document.getElementById("display").innerHTML = balance;
  }
  reset();
};

const myWithdrawal = (event) => {
  let withrawal = document.getElementById("withdraw").value;

  if (withrawal > balance || balance < 0) {
    document.getElementById("message1").innerHTML = `<h2 style="color: red" >
        Insufficient funds!</h2>`;
    setTimeout(() => {
      document.getElementById("message1").style.display = "none";
    }, 2000);
  } else {
    balance -= parseInt(withrawal, 10);
    document.getElementById("display").innerHTML = balance;
  }
  reset();
};

const reset = () => {

  document.getElementById("deposit").value = " ";
  document.getElementById("withdraw").value = " ";
  document.getElementById("r-username").value = " ";
  let userEmail = document.getElementById("r-email").value = " ";
};
