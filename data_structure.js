class BankAccount { 
    
    constructor(openingBalanse) {
        this.balanse = openingBalanse;
        console.log(`Начальный баланс: ${currency(openingBalanse)}`);
        let openBalanse = document.createElement('span');
        openBalanse.innerHTML = currency(openingBalanse);
        openingBalanse_list.appendChild(openBalanse);
    }

    deposit(addDeposit) {
        this.balanse = this.balanse + addDeposit;
        console.log(`Пополнение на сумму: ${currency(addDeposit)}`);
        console.log(`Баланс после пополнения: ${currency(this.balanse)}`);
        let deposit_add = document.createElement('span');
        deposit_add.innerHTML = currency(addDeposit);
        deposit_list.appendChild(deposit_add);
        let deposit = document.createElement('span');
        deposit.innerHTML = currency(this.balanse);
        balance_list.appendChild(deposit);
    }

    withDraw(awayDeposit) {
        this.balanse = this.balanse - awayDeposit;
        console.log(`Снятие: ${currency(awayDeposit)}`);
        let awayDeposit_aw = document.createElement('span');
        awayDeposit_aw.innerHTML = currency(awayDeposit);
        withDraw_list.appendChild(awayDeposit_aw);
    }

    display() {
        console.log(`Баланс: ${currency(this.balanse)}`);
        let total_balance = document.createElement('span');
        total_balance.innerHTML = currency(this.balanse);
        total_balance_list.appendChild(total_balance);
    }

}

let bankAccount = new BankAccount(100);
bankAccount.deposit(100);
bankAccount.withDraw(50);
bankAccount.display();


function currency(params) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(params) 
}
