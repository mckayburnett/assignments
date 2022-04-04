var box1 = document.getElementById("box")

function hover1() {
    box1.style.backgroundColor='blue';
}

function double() {
    box1.style.backgroundColor='green';
}

function hold() {
    box1.style.backgroundColor='red';
}

function release() {
    box1.style.backgroundColor='yellow';
}

function scroll() {
    box1.style.backgroundColor='orange';
}

box1.addEventListener("mouseover",hover1);
box1.addEventListener("dblclick",double);
box1.addEventListener("mousedown",hold);
box1.addEventListener("mouseup",release);
document.addEventListener("scroll",scroll);

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyB') {
      hover1()
    }
  });
document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyG') {
      double()
    }
  });
document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyR') {
      hold()
    }
  });
document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyY') {
      release()
    }
  });
document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyO') {
      scroll()
    }
  });
