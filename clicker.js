let cookieEl = document.getElementById('cookie')
let clickCount = 0
let scoreEl = document.getElementById('score')
let doublerButton = document.getElementById('doubler')
let countChange = 1
let win = document.getElementById('win')
let background = document.getElementById('background')
let celebration = document.getElementById('celebration')
let secondButton = document.getElementById('second')
let cookie2El = document.getElementById('cookie2')
let spacebar = document.getElementById('spacebar')

function cookieClicked(){
    clickCount = clickCount + countChange
    scoreEl.innerHTML = clickCount

    if (clickCount === 10) {
        if (countChange === 1) {
            doublerButton.classList.remove('remove')
        }
    }
    if (clickCount === 20) {
        secondButton.classList.remove('remove')
    }
    if (clickCount % 2 == 0) {
        background.classList.add('background2')
        background.classList.remove('background1')
    }  
    if (clickCount % 2 == 1)  {
        background.classList.add('background1')
        background.classList.remove('background2')
    }

    if (countChange===2){
        if (clickCount % 4 == 0) {
            background.classList.add('background2')
            background.classList.remove('background1')
        }  
        if (clickCount % 4 == 2)  {
            background.classList.add('background1')
            background.classList.remove('background2')
        }
    }
    if (clickCount % 10 == 0)
        celebration.classList.remove('remove')
    else
        celebration.classList.add('remove')
        
    if (clickCount > 50) {
        win.classList.remove('remove')
        celebration.classList.add('remove')
        background.classList.add('winBackground')
        background.classList.remove('background2')
        background.classList.remove('background1')
    }
}

document.body.onkeyup = function (e) {
    scoreEl.innerHTML = clickCount
    secondButton.classList.add('remove')
    cookie2El.classList.remove('remove')
    spacebar.classList.remove('remove')
    if(e.keyCode == 32){
    clickCount = clickCount + 1
    }
}
secondButton.addEventListener('click', document.body.onkeyup)


function buyDoubler () {
    clickCount = clickCount - 10
    scoreEl.innerHTML = clickCount
    doublerButton.classList.add('remove')
    countChange = 2
}

doublerButton.addEventListener('click', buyDoubler)

function shrink() {
    cookieEl.classList.add('shrink')
}
function grow() {
    cookieEl.classList.remove('shrink')
}


cookieEl.addEventListener('click', cookieClicked)
cookieEl.addEventListener('mousedown', shrink)
cookieEl.addEventListener('mouseup', grow)

let showButton = document.getElementById('show')
let removeButton = document.getElementById('remove')

function showCookie() {
    cookieEl.classList.remove('hide')

    showButton.classList.add('remove')
    removeButton.classList.remove('remove')
}
function hideCookie() {
    cookieEl.classList.add('hide')

    showButton.classList.remove('remove')
    removeButton.classList.add('remove')
}
showButton.addEventListener('click', showCookie)
removeButton.addEventListener('click', hideCookie)