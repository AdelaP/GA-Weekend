// ATM = {	
//     createAccount: function(name, balance) {
//       account = {name: name, balance: balance, createdAt: Date.now()}
//       return account;
//     },
//     withdraw: function(account, amount) {  
//         account.balance = account.balance - amount;
//         return account;
//       },
//     deposit: function(account, amount) {  
//         account.balance = account.balance + amount;
//         return account;
//       }
//     }

// felixAccount = ATM.createAccount('Felix','1000');
// felixAccount = ATM.withdraw(felixAccount,100);
// felixAccount = ATM.deposit(felixAccount,500);
// console.log(felixAccount.balance);

ATM = {
    createAccount: function(name, balance) {
      account = {name: name, balance: balance, createdAt: Date.now()}
      return account;
    },
    withdraw: function(account, amount) {  
        account.balance = account.balance - amount;
        return account;
      },
    deposit: function(account, amount) {  
        account.balance = account.balance + amount;
        return account;
      }
}
 
adelaAccount = ATM.createAccount('Adela','1000');
adelaAccount = ATM.withdraw(adelaAccount,200);
adelaAccount = ATM.deposit(adelaAccount,200);
console.log(adelaAccount.balance);