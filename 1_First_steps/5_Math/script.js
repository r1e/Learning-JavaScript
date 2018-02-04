/* --------------------------------------------------------------------------------
    数と演算子の実験
---------------------------------------------------------------------------------- */

var myInt = 5;
var myFloat = 6.667;

console.log(myInt); //5
console.log(myFloat); //6.667

console.log(typeof myInt); //number
console.log(typeof myFloat); //number

var num1 = 10;
var num2 = 50;

console.log(9 * num1); //90
console.log(num2 / num1); //5

console.log(5 + 10 * 3); //35
console.log(num2 % 9 * num1); //50
console.log(num2 + num1 / 8 + 2); //53.25

console.log((num2 + num1) / (8 + 2)); //6

var num1 = 4;
console.log(num1++); //4
console.log(num1); //5

var num2 = 6;
console.log(num2--); //6
console.log(num2); //5

var x = 3;
var y = 4;
console.log(x); //3
console.log(y); //4
console.log(x *= y); //12

/* --------------------------------------------------------------------------------
    button をクリックしたら button 要素と p 要素 内のテキストが入れ替わる
---------------------------------------------------------------------------------- */

// 変数 btn にドキュメント内の最初の button 要素を格納する
var btn = document.querySelector('button');
// 変数 txt にドキュメント内の最初の p 要素を格納する
var txt = document.querySelector('p');

// 変数 btn がクリックされたら updateBtn 関数が実行される
btn.addEventListener('click', updateBtn);

// updateBtn関数
function updateBtn() {
    // 変数 btn のテキストコンテンツが 'Start machine' のとき
    if (btn.textContent === 'Start machine') {
        // 変数 btn のテキストコンテンツを 'Stop machine' にする
        btn.textContent = 'Stop machine';
        // 変数 txt のテキストコンテンツを 'The machine has started!' にする
        txt.textContent = 'The machine has started!';
    } else { // それ以外のとき
        // 変数 btn のテキストコンテンツを 'Start machine' にする
        btn.textContent = 'Start machine';
        // 変数 txt のテキストコンテンツを 'The machine is stopped.' にする
        txt.textContent = 'The machine is stopped.';
    }
}