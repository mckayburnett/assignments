const readline = require("readline-sync");

let hp = [100];
const sum = [0]
let health = [+sum + +hp.reduce((sum, hp) => sum + hp, 0)];


const arrEnemies = [];
const arrRewards = [" Bitcoin " , " Ethereum " , " Dogecoin " , " Quant " , " Solana " , " TerraUSD " , " Polygon " , " LiteCoin " , " Comsmos " , " Chainlink " , " Uniswap " , " Alogrand "];
const virtualInv = []; 

function print(){
        console.log(health, virtualInv)
}
function attackAgain(){
    const attackAgain1 = readline.question("Press 'f' to attack again or 'r' to try and run.")
    if (attackAgain1 === 'f'){
    attackDmg();
    } else if (attackAgain1 === 'r'){
        run();
    } else if (attackAgain1 === 'p' || attackAgain1 === 'print'){
       print(); attackAgain();
    } else if (attackAgain !== 'f' || attackAgain !== 'r' || attackAgain !== 'p' || attackAgain !== 'print'){
        incorrectCommand(); attackAgain();
    }
}    
function attackDmg(){
    let randomHundred1 = Math.floor(Math.random() * 100) + 1;
    console.log("Your attack did " + randomHundred1 + " damage.")
    let monsterHp = 50;
    let monsterLife = +monsterHp - +randomHundred1;
    if (monsterLife <= 0){
        let reward = arrRewards[Math.floor(Math.random() * arrRewards.length)];
        console.log("Your attack was strong enough to destroy your enemy. The CryptoCurrency " + reward + " was added to your Virtual Inventory.")
        virtualInv.push(reward);
        walk();
    } else if (monsterLife >= 0){
        console.log("Your attack was not strong enough to destroy your enemy. Your enemy attacked you in return.")
        attacked();
    }    
}
function attacked(){
    let randomDmg = Math.floor(Math.random() * -40) + 1;
    hp.push(randomDmg);
    console.log("You were dealt " + randomDmg + " damage!");
    for (let i=0; i<hp.length; i++){
        if (+sum + +hp[i] <= 0){
        death();
        end();
        } else if (+sum + +hp[i] > 0){
        attackAgain();
        }   
    }
}
function fightRun(){
    const decision = readline.question(" Press 'f' to fight or 'r' to run. Please enter command now: ");
    if (decision === 'f'){
        fight()
    } else if (decision === 'r'){
        run()
    } else if (decision === 'p' || decision === 'print'){
        print(); fightRun(); 
    } else if (decision !== 'f' || decision !== 'r'){
        incorrectCommand(); fightRun();
    }
}
function end(){
    console.log("--------------------")
    console.log("--------------------")
    console.log("--------------------")
    console.log("--------------------")
    console.log("--------------------")
    console.log("--------------------")
    return 
}
function gameOver(){    
    const enter = readline.question("You finished this simulation with the CryptoCurrency(s) " + [virtualInv] + " in your Virtual Inventory. (hit 'Enter to continue)")
    console.log("As your simulated body begins to shut down you realize something: The darkness fading in from both sides seems real.. You're not regaining your 'real world senses'. Your smell, taste, touch. None of it's there. Something isn't right")
    const enter1 = readline.question("(hit 'Enter' to continue)")
    console.log("--------------------")
    console.log("--------------------")
    console.log("--------------------")
    console.log("--------------------")
    console.log("--------------------")
    console.log("--------------------")
    console.log("As the simulation comes to an end you understand. You never 'joined' this game. You were in it all along. You didn't walk into the Gaming Building and choose to play New Dimension. Those memories you had before were all implanted in your simulated brain.")
    const enter2 = readline.question("(hit 'Enter' to continue)")
    console.log("--------------------")
    console.log("--------------------")
    console.log("The lights go out and you sense your real self unplugging from Simulation: New Dimension.")
    const enter3 = readline.question("(hit 'Enter' to continue)")
    console.log("--------------------")
    console.log("--------------------")
    console.log("The 'game' is over.. If that's still what you want to call it.")
}
function death(){
    console.log("--------------------")
    const death = readline.question("You have lost all of your health points. (hit Enter to continue)")
    gameOver();
}
function fight(){
    const attack = readline.question("You have chosen to fight. Press 'Enter' to launch your attack.")
    attackDmg();
}
function run(){
    const randomHundred = Math.floor(Math.random() * 100) + 1;
    if (randomHundred >= 50){
        console.log("You were not able to escape!")
        attacked(); 
    } else if (randomHundred <= 50){
        console.log("You managed to escape! Only one direction to go now.")
        walk();
    }
}
function incorrectCommand(){
    console.log("Incorrect key.")
}
function genesis(){
    const name = readline.question("Welcome to Simulation: New Dimension. First, we need to create your simulated self. What is your name? ");
    const age = readline.question('Hello, ' + name + ', please enter your age: ');
    const fear1 = readline.question("Okay, " + name + ", age " + age + ". To give you the best simulated experience we'll need to get personal. We will now go over your fears. What would you consider your greatest fear?: ")
    const fear2 = readline.question("what is your second greatest fear?: ")
    const fear3 = readline.question("Lastly, what is your third greatest fear?: ")
    arrEnemies.push(fear1, fear2, fear3);
    console.log("--------------------")
    console.log("--------------------")
    const hero = readline.question("Thank you, " + name + ", now, to further perfect our simulation of your self, please tell me the name of a person that you admire: ")
    person1 = "an evil " + hero;
    const heroReal = readline.question("Now please tell me the name of someone in you inner circle that you look up to: ")
    person2 = "an evil " + heroReal;
    arrEnemies.push(person1, person2);
    console.log("--------------------")
    console.log("--------------------")
    console.log("Thank you, " + name + ".")
    const intro = readline.question("With that information, along with your brain scan we have previously acquired, we have completed your personal simulation. What lies ahead is a personalized adventure based on your biometric information. Your wants, your fears, your secrets; these are what created this adventure. Good luck. (hit 'Enter' to continue)")
    console.log("--------------------")
    console.log("--------------------")
    const start = readline.question("You are now in the simulation. Above you appears the number '100' (your hp) along with the words 'Virtual Inventory'. At any time in the game you can type 'p' or 'print' to view these. (hit 'Enter' to continue)")
    if (start === 'p' || start === 'print'){
        print();
    }
}
function paths(){
    console.log("In front of you lies a forest. To the left, an empty street. To the right, a dry riverbed.") 
    const direction = readline.question("Press 'w' to walk straight ahead. Press 'd' to walk right. Press 'a' to walk left. ")
    if (direction === "w"){
        console.log("You have entered the forest. ")
    } else if (direction === "d"){
        console.log("You have entered the dry riverbed. ")
    } else if (direction === "a"){
        console.log("You have entered the empty street. ")
    } else if (direction === "p" || direction === "print"){
        print(); paths(); 
    }else if (direction !== "w" || direction !== "d" || direction !== "a" || direction !== "p" || direction !== "print"){
        incorrectCommand(); paths()
    }    
}
function walk(){
    if (arrEnemies.length === 0){
        console.log("Congratulations! You have defeated every possible enemy. You win.")
        gameOver();
        end();
    }
    const forward = readline.question("Press 'w' to continue walking. ")
    if (forward === "w"){
        const randomTen = Math.floor(Math.random() * 10) + 1
        let enemy = arrEnemies[Math.floor(Math.random() * arrEnemies.length)]
        let enemyIndex = arrEnemies.indexOf(enemy)
        if (randomTen%3 === 0){
            console.log("As you were walking, a manifestation of " + enemy + " appeared in front of you! You have two options:")
            const result = arrEnemies.splice(enemyIndex, 1)
            fightRun();
        } else if (randomTen%4 === 0){
            console.log("The sky is getting darker. Better hurry. ")
            walk();
        } else if (randomTen%5 === 0){
            console.log("There is a fog that keeps getting thicker. Better keep moving. ")
            walk();
        } else {
            walk();
        }
    } else if (forward === "p" || forward === "print"){
        print(); walk();
    } else if (forward !== "w" || forward !== "p" || forward !== "print"){
        incorrectCommand(); walk();
    }
}

genesis();{
    paths();{
        walk();
    }
}