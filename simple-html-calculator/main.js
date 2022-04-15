const add = document.addition


const sub = document.subtraction


const mul = document.multiplication


add.addEventListener("submit", function(e){
    e.preventDefault();
    const add1 = add.addition1.value
    const add2 = add.addition2.value
    add.addition1.value =""
    add.addition2.value =""

    const addResult = +add1 + +add2
    
    document.getElementById('additionDiv').append(addResult)
})

sub.addEventListener("submit", function(e){
    e.preventDefault();
    const sub1 = sub.subtraction1.value
    const sub2 = sub.subtraction2.value
    sub.subtraction1.value =""
    sub.subtraction2.value =""

    const subResult = sub1 - sub2
    
    document.getElementById('subtractionDiv').append(subResult)
})

mul.addEventListener("submit", function(e){
    e.preventDefault();
    const mul1 = mul.multiplication1.value
    const mul2 = mul.multiplication2.value
    mul.multiplication1.value =""
    mul.multiplication2.value =""

    const mulResult = mul1 * mul2
    
    document.getElementById('multiplicationDiv').append(mulResult)
})