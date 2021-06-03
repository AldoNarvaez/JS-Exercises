class BankInfo {

	constructor(accountNum, balance){
		this.accountNum=accountNum;
		this.balance=balance
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
		return bank.balance[i];
	}

	 retrive(money){
		let i=bank.accountNum.findIndex(x=> x==this.account)
		if(money<bank.balance[i]){
			bank.balance[i]=bank.balance[i]-money;
			this.OwnMoney=this.OwnMoney+money;
		}
	}

	 hold(money){
		let i=bank.accountNum.findIndex(x=> x==this.account)
		if(money<=this.OwnMoney){
			bank.balance[i]=bank.balance[i]+money;
			this.OwnMoney=this.OwnMoney-money;
		}
	}

	 deposit(money, account){
		let i=bank.accountNum.findIndex(x=> x==this.account)
		let j=bank.accountNum.findIndex(x=> x==account)
		if(money<=this.OwnMoney){
			bank.balance[j]=bank.balance[j]+money;
			this.OwnMoney=this.OwnMoney-money;
		}
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