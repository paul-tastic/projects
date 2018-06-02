const account = {
    name: 'Paul',
    expenses: [],
    incomes: [],

    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },

    addIncome: function(description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
       
    },

    getAccountSummary: function() {
        let eTotal = 0
        let iTotal = 0
        this.expenses.forEach(function(element) {
            //add up expenses as we loop through
        eTotal += element.amount
        })
        this.incomes.forEach(function(element) {
            //add up expenses as we loop through
            iTotal += element.amount
        })
        return `${this.name} has a balance of $${iTotal-eTotal}. $${iTotal} in income. $${eTotal} in expenses.`
    }
}

account.addExpense('Rent', 900)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())

// expense - > description, amount

//addexpense -> description, amount... add to array with data
//getaccountsummary -> total up all expenses, create printout

// add income array
// 

