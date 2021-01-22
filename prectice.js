function Calculation() {

    dollar = document.getElementById("Input1").value;
    document.getElementById("Input2").value = dollar * 85.65;



}


function ClearConverter() {
    document.getElementById("Input1").value = "";
    document.getElementById("Input2").value = "";


}


// Calculator 


function Add() {
    var x, y, txtResult;
    x = document.getElementById('txtFirst').value;
    y = document.getElementById('txtSecond').value;
    if (x == " " || y == "") {
        alert("Please enter FirstValue and SecondValue");
    } else {
        var txtResult = +x + +y;
        document.getElementById('txtResult').innerHTML = "Result: " + txtResult;
    }
}

function Sub() {
    var x, y, txtResult;
    x = document.getElementById('txtFirst').value;
    y = document.getElementById('txtSecond').value;
    if (x == " " || y == "") {
        alert("Please enter FirstValue and SecondValue");
    } else {
        var txtResult = +x - +y;
        document.getElementById('txtResult').innerHTML = "Result: " + txtResult;
    }
}

function Mul() {
    var x, y, txtResult;
    x = document.getElementById('txtFirst').value;
    y = document.getElementById('txtSecond').value;
    if (x == " " || y == "") {
        alert("Please enter FirstValue and SecondValue");
    } else {
        var txtResult = +x * +y;
        document.getElementById('txtResult').innerHTML = "Result: " + txtResult;
    }
}

function Div() {
    var x, y, txtResult;
    x = document.getElementById('txtFirst').value;
    y = document.getElementById('txtSecond').value;
    if (x == " " || y == "") {
        alert("Please enter FirstValue and SecondValue");
    } else if (y != 0) {
        var txtResult = +x / +y;
    } else {
        alert("Second Number Should not be Zero");
    }
    document.getElementById('txtResult').innerHTML = "Result: " + txtResult;
}

function Clear() {
    document.getElementById('txtFirst').value = "";
    document.getElementById('txtSecond').value = "";
    document.getElementById('txtResult').value = "";

}