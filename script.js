let buttons = document.querySelectorAll('button');
let p = document.getElementById('ip');

document.body.addEventListener('keydown', function(event) {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML === event.key.toUpperCase()) {
            buttons[i].classList.add('active');
        }
    }

    p.innerHTML += event.key;

    if (event.key === 'Backspace') {
        p.innerHTML = p.innerHTML.slice(0, -1);
    }
});

document.body.addEventListener('keyup', function(event) {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML === event.key.toUpperCase()) {
            buttons[i].classList.remove('active');
        }
    }
});

buttons.forEach(function(button) {
    button.addEventListener('mousedown', function() {
        button.classList.add('active');
        p.innerHTML += button.innerHTML;
    });

    button.addEventListener('mouseup', function() {
        button.classList.remove('active');
    });

    button.addEventListener('touchstart', function() {
        button.classList.add('active');
    });

    button.addEventListener('touchend', function() {
        button.classList.remove('active');
    });
});

function handleSpecialButton(button, action) {
    button.addEventListener('mousedown', function() {
        button.classList.add('active');
        action();
    });

    button.addEventListener('mouseup', function() {
        button.classList.remove('active');
    });

    button.addEventListener('touchstart', function() {
        button.classList.add('active');
        action();
    });

    button.addEventListener('touchend', function() {
        button.classList.remove('active');
    });
}

let space = document.getElementById('space');
handleSpecialButton(space, function() {
    p.innerHTML += ' ';
});

let backspace = document.getElementById('backspace');
handleSpecialButton(backspace, function() {
    p.innerHTML = p.innerHTML.slice(0, -1);
});

let ctrl = document.getElementById('ctrl');
handleSpecialButton(ctrl, function() {
});

let alt = document.getElementById('alt');
handleSpecialButton(alt, function() {
});
