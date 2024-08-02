interface ibankaccount {
  credit(amount: number): void;
  debit(amount: number): void;
}
//class
class Bankaccount implements ibankaccount {
  accountbalance: number;
  constructor(accountBalance: number) {
    this.accountbalance = accountBalance;
  }

  //publically credit
  public credit(amount: number) {
    if (amount > 0) {
      this.accountbalance += amount;
      console.log(
        "Credit successfully get into new account and your balance is :" +
          this.accountbalance
      );
    } else {
      console.log("credit unsuccessful");
    }
  }
  //publically debit
  public debit(amount: number) {
    if (amount > 0 && amount < this.accountbalance) {
      this.accountbalance -= amount;
      console.log(
        "Debit successfully share in new account:" + this.accountbalance
      );
    } else {
      console.log("debit unsuccessfully");
    }
  }
}

//customer details

class Customer {
  person: {
    firstname: string;
    lastname: string;
  };
  age: number;
  gender: string;
  mobileNo: number;
  bankaccount: Bankaccount;

  constructor(
    person: { firstname: string; lastname: string },
    age: number,
    gender: string,
    mobileNo: number,
    bankaccount: Bankaccount
  ) {
    //this property utilization

    this.person = person;
    this.age = age;
    this.gender = gender;
    this.mobileNo = mobileNo;
    this.bankaccount = bankaccount;
  }
  // publically user access

  public display() {
    console.log("Name:" + this.person.firstname + " " + this.person.lastname);
    console.log("Age:" + this.age);
    console.log("Gender:" + this.gender);
    console.log("Mobile Number:" + this.mobileNo);
    console.log("Amount in Bank:" + this.bankaccount.accountbalance);
    console.log("");
  }
}

const a1 = new Bankaccount(800);
const c1 = new Customer(
  { firstname: "Aliza", lastname: "Noor" },
  18,
  "female",
  3411111112,
  a1
);
c1.display();
c1.bankaccount.debit(400);
console.log();

const a2 = new Bankaccount(500);
const c2 = new Customer(
  { firstname: "Nosheen", lastname: "Fatima" },
  35,
  "female",
  3412222223,
  a1
);
c2.display();
c2.bankaccount.debit(200);
console.log();
