/* --------------------------------------------------------------------------------
    Return_values
-------------------------------------------------------------------------------- */
var input = document.querySelector('.numberInput');
var para = document.querySelector('p');

function squared(num) {
    return num * num;
  }

function cubed(num) {
    return num * num * num;
}

function factorial(num) {
    var x = num;
    while (x > 1) {
        num *= x - 1;
        x--;
}
    return num;
}

// 変数 input の値が変更されたとき実行する関数
input.onchange = function() {
    var num = input.value;

    // isNaN() 関数で num が数値かどうかを調べる
    // 数値の場合は true、そうで無い場合は false を返す
    if (isNaN(num)) {
        para.textContent = 'You need to enter a number!';
    } else {
        para.textContent = num + ' squared is ' + squared(num) + '. ' +
        num + ' cubed is ' + cubed(num) + '. ' +
        num + ' factorial is ' + factorial(num) + '.';
    }
}