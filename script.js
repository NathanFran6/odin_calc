function add(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
}

function operate() {
    let num1 = prompt('What is your first number?')
    let num2= prompt('What is your second number')
    console.log(
    add(num1, num2),
    subtract(num1, num2),
    multiply(num1, num2),
    divide(num1, num2)
    )
}

function display(num) {
    let dis = document.createElement('p')
    let number = document.createTextNode(num)
    dis.appendChild(number)
    dis.setAttribute('class','ops')
    let output = document.getElementById('output')
    output.appendChild(dis)
}

function displayOp(op) {
    let dis = document.createElement('p')
    let oper = document.createTextNode(op)
    dis.appendChild(oper)
    dis.setAttribute('class','ops')
    let output = document.getElementById('output')
    output.appendChild(dis)
}

function clean() {
    const e = document.getElementById('output')

    while (e.hasChildNodes()) {
        e.removeChild(e.firstChild)
    }
}

function saveOp() {
    const e = document.getElementById('output')
    op=e.textContent
    clean()
    console.log(op)
    return op  
}

function saveNum() {
    const e = document.getElementById('output')
    num=e.textContent
    clean()
    console.log(num)
    return num
}

function result() {
    const e = document.getElementById('output')
    num2=e.textContent
    clean()
    console.log(num2)
    return num2
}
//My console log shows me all the data I need, I just need to hold onto that data to be able to calculate it together,
//but that is harder than it sounds b/c I can't figure out how to get the return valuesa nd put them into a different function.


function output() {
    console.log(num1,num2,op)
}