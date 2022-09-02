let rn1 = document.getElementById('rn1')
let rn2 = document.getElementById('rn2')
let result = document.getElementById('result')
let timerElement = document.getElementById('timer')

let r1, r2
let t=0, m=0, s=0, tO
let m1=0, s1=0

let addition = () => {
    r1 = Math.floor(Math.random() * 1000) + 100
    r2 = Math.floor(Math.random() * 1000) + 100
}

let timer = () => {
    s++
    if (s >= 59) {
        s = 0
        m++
    }
    if (s < 10) {
        sec = `0${s}`
    } else {
        sec = s
    }
    if (m < 10) {
        min = `0${m}`
    } else {
        min = m
    }
    // Display timer
    timerElement.innerHTML = `${min}:${sec}`
}

window.addEventListener('load', () => {
    tO = setInterval(timer, 1000)
    addition()
    rn1.innerHTML = r1
    rn2.innerHTML = r2
})

window.addEventListener('keydown', (e) => { 
    if (e.key === "Enter") {
        clearInterval(tO)
        m = 0;
        s = 0;
        result.innerHTML = r1 + r2 
    }
    if (e.code === "Space") {
        clearInterval(tO)
        m = 0;
        s = 0;
        timerElement.innerHTML = `00:00`
        tO = setInterval(timer, 1000)
        addition() 
        rn1.innerHTML = r1
        rn2.innerHTML = r2
        result.innerHTML = ''
    }
})

