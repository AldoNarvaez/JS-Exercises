let c1={"name": "Aldo", "account":1234, "balance":100,"pin":1993};
let c2={"name": "Sebas", "account":4567, "balance":200,"pin":2001};


class BankInfo {

	constructor(){
		let accountsPrivate=Array.from(arguments);
	


	this.showBalance=function (account,pin) {
		
		for(let i of accountsPrivate){
			if (i["account"]==account && i["pin"]==pin){
				return i["balance"]
			}
		
		}
		 throw new Error("Incorrect PIN");
	}

	this.addClient=function (name,account,balance,pin){
		let obj={"name":name, "account":account, "balance":balance, "pin":pin};
		accountsPrivate.push(obj);
	}

	this.retrive=function(money,account,pin){
		for(let i of accountsPrivate){
			if (i["account"]==account && i["pin"]==pin){
					if(money<i["balance"]){
						i["balance"]=i["balance"]-money;
						return money
					}
					else{throw new Error("Not enough money in balance")}
			}
		
		}
		throw new Error("Incorrect Pin")

	}

	this.hold=function(money, account,pin){
		for(let i of accountsPrivate){
			if (i["account"]==account && i["pin"]==pin){
				i["balance"]=i["balance"]+money;
				return money
			}
		
		}
		throw new Error("Incorrect Pin")


		
	}

	this.deposit=function(money,FromAccount,toAccount,pin){

		for(let i of accountsPrivate){
			if (i["account"]==FromAccount && i["pin"]==pin){
				for(let j of this.accounts)
					if (j["account"]==toAccount){
						j["balance"]=j["balance"]+money;
						return money
					}
			}
		
		}
		 throw new Error("Incorrect PIN");
	}
}
}




class Client {
	constructor(account, OwnMoney){
		let acc=account;
		let pocket=OwnMoney;
		//this.pin=pin;
	

	this.balance=function (pin){ 
		return bank.showBalance(acc,pin);
		//let i=bank.accountNum.findIndex(x=> x==this.account);
		//return bank.showBalance(this.account);
	}

	 this.retrive=function(money,pin){
	 	pocket=pocket+bank.retrive(money,acc,pin);
		
	}

	 this.hold=function(money,pin){
	 	if(money<=pocket)
	 	{ 	pocket=pocket-bank.hold(money,acc,pin);
		}
		 else{throw new Error("Not enough pocket Money")}
	}

	 this.deposit=function(money, account,pin){
	 	if(money<=pocket)
	 	{pocket=pocket-money;
	 	bank.deposit(money,acc,account, pin);
		}
		else{ throw new Error("You don't have enough money")}
		
	}
}
}
const addingClients=function (name, account, pin, balance,pocketMoney) {
	let client=new Client(account,pocketMoney);
	bank.addClient(name,account,balance,pin);
	return client;

}


let bank=new BankInfo(c2,c1)

var client1=new Client(1234,300);
var client2=new Client(4567,100);
//var client3=addingClients("Laura",5678,2100,500, 250);
//var client3=new Client(9101,1000);
//var client4=new Client(1213,100);

//console.log(client1);
console.log(client2.balance(2001));
//console.log(bank);
console.log(client1.balance(1993));
client1.hold(100,1993);
//client1.deposit(100,client2.account,1993)
//console.log(bank)
//console.log(client1)
console.log(client1.balance(1993))
client2.retrive(100,2001);
console.log(client2.balance(2001))
//console.log(bank)

//class MyObject {
  // constructor(){
    // let _privateValue = 0;
  //  this.getValue= function() { return _privateValue; }
   // this.inc = function() { _privateValue++;}
  //}

//}

//let c=new MyObject();
//console.log(c)




