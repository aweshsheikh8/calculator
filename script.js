function add() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let sum = n1 + n2;
    document.getElementById("result").innerHTML = sum;
}

function minus() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let minus = n1 - n2;
    document.getElementById("result").innerHTML = minus;
}

function multiy() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let multiy = n1 * n2;
    document.getElementById("result").innerHTML = multiy;
}

function divaid() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let divaid = n1 / n2;
    document.getElementById("result").innerHTML = divaid;
}