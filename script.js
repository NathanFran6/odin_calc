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

function clean() {
    const e = document.getElementById('output')

    while (e.hasChildNodes()) {
        e.removeChild(e.firstChild)
    }
}

//Need to figure out how to save the first number, then save the operation, then get teh second and do the operation.
function save(op) {
    const e = document.getElementById('output')

    num=e.textContent
    
}