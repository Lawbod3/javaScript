let bankAccount = {
      owner : "Olabode",
        balance:1000,
        desposit:function(amount){
            this.balance += amount
            console.log(` New balance is ${this.balance}`)
        },
        withdraw:function(amount){
            if(this.balance >= amount){
                this.balance -= amount
               console.log(` New balance is ${this.balance}`)
            }else{
                console.log("Insufficient funds")
            }
        }

}



module.exports = bankAccount
