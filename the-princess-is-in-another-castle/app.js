let statuses = ['Dead', 'Small', 'Big', 'Powered Up']

class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
    setName(namePicked){
        this.name = namePicked
    }
    gotHit(){
        console.log(`Got hit!`)
        if (this.hasStar === true){
            console.log("Your star protected you!");
            this.hasStar = false;
        } else if (this.hasStar === false && this.status === statuses[2]){
            this.status = statuses[1]
        } else if (this.hasStar === false && this.status === statuses[1]){
            this.status = statuses[0];
            console.log('You lost the Game. You died!')
            clearInterval(intervalId)
        } else if (this.hasStar === false && this.status === statuses[3]){
            this.status = statuses[2]
        }
    }
    gotPowerup(){
        console.log(`Got a Power Up!`)
        if (this.status === statuses[2]){
            this.status = statuses[3];
        } else if (this.status === statuses[1]){
            this.status = statuses[2];
        } else if (this.status === statuses[3]){
            this.status = statuses[3] 
            console.log('Congratulations! You got a star!')
            this.hasStar = true;
        }
    }
    addCoin(){
        console.log(`Collected a coin!`)
        this.totalCoins += 1;
    }
    print(){
        console.log(`Name: ${this.name}
Total Coins: ${this.totalCoins}
Status: ${this.status}`)   
    }
}


const playerOne = new Player('name', 0, statuses[2], false)
playerOne.setName("Mario")
const randomRange = () => {
    let num = Math.floor(Math.random() * 3)
    console.log(num)
    if (num === 0){
        playerOne.gotHit();
    } else if (num === 1){
        playerOne.gotPowerup();
    } else if (num === 2){
        playerOne.addCoin();
    }
    playerOne.print();
}

var intervalId = setInterval(randomRange, 100)