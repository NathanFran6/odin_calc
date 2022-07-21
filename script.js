function add(a,b) {
    let sum = a+b
    let rSum = Math.round(sum)
    display(rSum)
}

function subtract(a,b) {
    let diff = a-b
    let rDiff = Math.round(diff)
    display(rDiff)
}

function multiply(a,b) {
    let prod = a*b
    let rProd = Math.round(prod)
    display(rProd)
}

function divide(a,b) {
    div = a/b
    let rDiv = Math.round(div)
    display(rDiv)
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

function wipe() {
    for (elements in nums) {
        nums.pop()
    }
    for (elements in ops) {
        ops.pop()
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
    console.log('Result: ' +result)
    console.log(ops)
    //Calls each function based on the operation
    //If it is the >1 equation, it adds the previous calcaution + the new number, and
    //Then splices out the calculation and oeprator to make room for the next calculation.
    if (ops[0]== '+') {
        add(result[0], result[1])
        nums.splice(0,2)
        ops.splice(0,1)
    }else if (ops[0]=='-') {
        subtract(result[0], result[1])
        nums.splice(0,2)
        ops.splice(0,1)
    }else if (ops[0]=='x') {
        multiply(result[0], result[1])
        nums.splice(0,2)
        ops.splice(0,1)
    }
    else if (ops[0]=='/') {
        if (result[1]== 0) {
            display('Undefined')
            wipe()
        } else {
            divide(result[0], result[1])
            nums.splice(0,2)
            ops.splice(0,1)
        }
    }

}