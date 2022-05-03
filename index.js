let balance = 0;
let accounts = [];

const accId = () => {
  let val = Math.floor(1000 + Math.random() * 9000);
  return val;
};

const regDetail = () => {
  let userName = document.getElementById("r-username").value;
  let userEmail = document.getElementById("r-email").value;
    
  let accountHolder = {
    accNum: accId(),
    userName: userName,
    userEmail: userEmail,
    balance: 0,
  };
  

  accounts.push(accountHolder);
  console.log(accountHolder);

  localStorage.setItem("account", JSON.stringify(accountHolder));
  let newObj = window.localStorage.getItem("account");
  console.log(JSON.parse(newObj));
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
};
