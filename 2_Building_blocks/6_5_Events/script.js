/* --------------------------------------------------------------------------------
    Events5
-------------------------------------------------------------------------------- */

var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submin = document.getElementById('submit');
var para = document.querySelector('p');


// form が submit したときに実行される関数
form.onsubmit = function(e) {
    // fname もしくは lname の値が空のとき
    if (fname.value === '' || lname.value === '') {
        // form の送信を停止するイベント
        e.preventDefault();
        // 変数 para にテキストコンテンツが格納される
        para.textContent = 'You need to fill in both names!';
    }
}