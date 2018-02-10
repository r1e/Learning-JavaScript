/* --------------------------------------------------------------------------------
    function の実験 (スコープ)
-------------------------------------------------------------------------------- */

var x = 1;

function a() {
    var y = 2;
}

function b() {
    var z = 3;
}

function output(value) {
    var para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = 'Value: ' + value;
}

output(x); // Value: 1
output(y); // error
output(z); // error

function a() {
    var y = 2;
    output(y)
}

//a(); // Value: 2

function b() {
    var z = 3;
    output(z);
}

b(); // Value: 3

function a() {
    var y = 2;
    output(z)
}

a(); //error