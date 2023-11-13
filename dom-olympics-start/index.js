var head = document.createElement("h1");
var header = document.getElementById("header");
header.prepend(head);
head.textContent = "JavaScript Made This!";
head.style.textAlign = "center";
head.style.fontStyle = "bold";

var subtitle = document.createElement("h3");
header.append(subtitle);

subtitle.innerHTML = '<span class= "name">McKay</span> wrote the JavaScript';
subtitle.style.textAlign= 'center';
subtitle.style.fontSize= "medium";

const messages = document.getElementsByClassName("message");
messages[0].textContent = "I just want you to know... You smell like rainbows and butterflies.";
messages[1].textContent = "Awwwwwwe, thank you so much!";
messages[2].textContent = "Honestly, if you think about it, those things don't smell that great..";
messages[3].textContent = "Oh... Well it's the thought that counts I guess.";

const clear = document.getElementById("clear-button")
clear.addEventListener("click",function() {
    messages[0].textContent = ""
    messages[1].textContent = ""
    messages[2].textContent = ""
    messages[3].textContent = ""
});

function blueBrown() {
    messages[0].backgroundColor = 'brown'
    messages[1].backgroundColor = 'blue'
    messages[2].backgroundColor = 'brown'
    messages[3].backgroundColor = 'blue'
};
function redBlack() {
    messages[0].backgroundColor = 'black'
    messages[1].backgroundColor = 'red'
    messages[2].backgroundColor = 'black'
    messages[3].backgroundColor = 'red'
};
element.classList.toggle("theme-two");
for(let i = 0; i < messages.length; i++) {
    messages[i].classList.toggle("theme-two");
}
