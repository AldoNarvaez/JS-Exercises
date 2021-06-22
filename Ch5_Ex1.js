class BankInfo {

	constructor(accountNum, balance){
		this.accountNum=accountNum;
		this.balance=balance
	}

	showBalance(account){
		let i=this.accountNum.findIndex(x=> x==account)
		return this.balance[i];
	}

	retrive(money,account){
		let i=this.accountNum.findIndex(x=> x==account)
		if(money<bank.balance[i]){
			bank.balance[i]=bank.balance[i]-money;
			return bank.balance[i]
		}
	}

	hold(money, account){
		let i=this.accountNum.findIndex(x=> x==account)
			this.balance[i]=this.balance[i]+money;
			return this.balance[i]
		
	}

	deposit(money,FromAccount,toAccount){
		let i=this.accountNum.findIndex(x=> x==FromAccount)
		let j=this.accountNum.findIndex(x=> x==toAccount)
			this.balance[j]=this.balance[j]+money;
					}
}


let acs=[1234,5678,9101,1213];
let bal=[150,300,400,500];

var bank = new BankInfo(acs,bal);

class Client {
	constructor(account, OwnMoney){
		this.account=account;
		this.OwnMoney=OwnMoney;
	}

	get balance(){ let i=bank.accountNum.findIndex(x=> x==this.account);
		return bank.showBalance(this.account);
	}

	 retrive(money){
	 	this.OwnMoney=this.OwnMoney+bank.retrive(money,this.account);
		
	}

	 hold(money){
	 	if(money<=this.OwnMoney)
	 	{this.OwnMoney=this.OwnMoney-money;
	 	bank.hold(money,this.account);
		}
		else(console.log("You don't have enough money"))
	}

	 deposit(money, account){
	 	if(money<=this.OwnMoney)
	 	{this.OwnMoney=this.OwnMoney-money;
	 	bank.deposit(money,this.account,account);
		}
		else{console.log("You don't have enough money")}
		
	}
}

var client1=new Client(1234,300);
var client2=new Client(5678,200);
var client3=new Client(9101,1000);
var client4=new Client(1213,100);

console.log(bank);
console.log(client1);
console.log(client2);
client1.hold(100);
client1.deposit(100,client2.account)
console.log(bank)
console.log(client1)
console.log(client2)
client2.retrive(100);
console.log(client2)
console.log(bank)

