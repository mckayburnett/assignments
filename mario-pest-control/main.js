const form1 = document.form;
const form2 = document.form2;
const button = form1.button;
document.getElementById("total").textContent = 0;
let total = [];
let sum = 0;

form1.addEventListener('submit', function(e){
    e.preventDefault();
    let goombas = form1.goombas.value*5;
    let bobombs = form1.bobombs.value*7;
    let cheeps = form1.cheeps.value*11;

    total.push(goombas, bobombs, cheeps)
    
    for (let i=0; i<total.length; i++){
        sum += total[i];
    }
    let totalSummed = sum
    document.getElementById("total").textContent = totalSummed
    
    
})

form2.addEventListener('click', function(e){
    e.preventDefault();
    
    document.getElementById("total").textContent = 0;
    total.shift();
    total.shift();
    total.shift();
    location.reload();
    
})