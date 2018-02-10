/* --------------------------------------------------------------------------------
    Ternary operator
    
    > if文は処理の分岐を行う場合に使います。
    > 三項演算子は2つ（もしくはそれ以上）の中から一つを選択するという処理を行う場合に使います。

    参考:https://qiita.com/stkdev/items/cbb83cbd9921b9f755a4
-------------------------------------------------------------------------------- */

var select = document.querySelector('select');
var html = document.querySelector('html');

// body の style に padding:10px; を設定する
document.body.style.padding = '10px';

// bgColor と textColor を引数にもつ update 関数
function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

// select の値が変わった時に実行される関数
select.onchange = function() {
    // select の値が black (true) のとき、引数に('black', 'white')を渡してupdate 関数を実行する
    // false のときは反転する
    (select.value === 'black') ? update('black', 'white') : update('white', 'black');
}