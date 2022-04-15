const button = document.getElementById("button");

let clicks = 0;

button.addEventListener('click', function(){
    clicks += 1;
    document.getElementById("counterTotal").textContent = clicks 
    console.log(clicks)
    localStorage.setItem("clickCounter", clicks);
})


document.getElementById("counterTotal").textContent = localStorage.getItem("clickCounter")

