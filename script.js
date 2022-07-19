function add(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    display(sum)
}

function subtract(array) {
    let diff = 0
    for (let i =1; i <array.length; i++){
        diff = array[0] -=array[i]
    }
    display(diff)
}

function multiply(array) {
    let prod = 1
    for (let i =0; i <array.length; i++) {
        prod *= array[i]
    }
    display(prod)
}

function divide(array) {
    div = 0
    for (let i =1; i<array.length;i++) {
        div= array[0]/=array[i]
    }
    display(div)
}

//Arrays! A wonderful thing for keeping data global and at hand. 
let nums = []
let ops= []

//Displays each number 
function display(num) {
    let dis = document.createElement('p')
    let number = document.createTextNode(num)
    dis.appendChild(number)
    dis.setAttribute('class','ops')
    let output = document.getElementById('output')
    output.appendChild(dis)
}

//Displays the operations with the last number
function displayOp(op) {
    let dis = document.createElement('p')
    let oper = document.createTextNode(op)
    dis.appendChild(oper)
    dis.setAttribute('class','ops')
    let output = document.getElementById('output')
    output.appendChild(dis)
}

//Wipe screen after each number or operation is inputed
function clean() {
    const e = document.getElementById('output')

    while (e.hasChildNodes()) {
        e.removeChild(e.firstChild)
    }
}

//Saves the operation and pushes it to the array (ops)
function saveOp() {
    const e = document.getElementById('output')
    op=e.textContent
    clean()
    ops.push(op) 
}

//First number save and push to the array (nums)
function saveNum() {
    const e = document.getElementById('output')
    num=e.textContent
    clean()
    nums.push(num)
}

//Second number save and push to the array (nums)
function saveNum2() {
    const e = document.getElementById('output')
    num2=e.textContent
    nums.push(num2)
    clean()
}

function output() {
    //Makes each number in the array into an integer 
    const result = nums.map(x => parseInt(x,10))
    //Calls each function based on the operation
    if (ops[0]== '+') {
        add(result)
    }else if (ops[0]=='-') {
        subtract(result)
    }else if (ops[0]=='x') {
        multiply(result)
    }
    else if (ops[0]=='/') {
        divide(result)
    }
    
}