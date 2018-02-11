/* --------------------------------------------------------------------------------
    Events2
-------------------------------------------------------------------------------- */

function random(number) {
    // Math.random() で生成した浮動小数点の擬似乱数と変数 number に1を足した数で掛け、Math.floor 引数として与えた数以下の最大の整数にする
    // 255 を最大値にしたいので number に 1 を足している
    return Math.floor(Math.random() * (number + 1));
}

var btn = document.querySelector('button');


function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;

// ドキュメント内にある全ての button 要素にイベントをもたせたい場合は、以下のような書き方になる
var buttons = document.querySelectAii('button');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = bgChange;
}

/* --------------------------------------------------------------------------------
    イベントハンドラの種類
-------------------------------------------------------------------------------- */

btn.onclick = bgChange; // ボタンがクリックしたとき

// onfocus や onblur は、フォームの記入方法に関する情報やエラーメッセージを表示させるためによく使われる
btn.onfocus = bgChange; // ボタンがにフォーカスがあたったとき
btn.onblur = bgChange; // ボタンのフォーカスがはずれたとき

btn.ondblclick = bgChange; // ボタンがダブルクリックされたとき

// window オブジェクトに設定できるイベントハンドラ
window.onkeypress = bgChange; // キーがキーボード上で押されたとき
window.onkeydown = bgChange; // キーダウンしたとき
window.onkeyup = bgChange; // キーアップしたとき

btn.onmouseover = bgChange; // ボタンがホバーしたとき
btn.onmouseout = bgChange; // ボタンのホバーが離れたとき


/* --------------------------------------------------------------------------------
    注意点
-------------------------------------------------------------------------------- */

// 以下のように HTML にイベントハンドラを記述することもできるが、非効率なのでやらないようにする
// プログラミングロジックをコンテンツから切り離すことで検索エンジンがサイトを使いやすくなる

/*
<button onclick="bgChange()">Press me</button>
<button onclick="alert('Hello, this is my old-fashioned event handler!');">Press me</button>
*/

/* --------------------------------------------------------------------------------
    addEventListener() および removeEventListener()
-------------------------------------------------------------------------------- */

// addEventListener() を使って、先のコードを以下のように書き換えられる
btn.addEventListener('click', function() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
});

// removeEventListener()を使って、先のコードのイベントを削除できる
// 大きくて複雑なプログラムで古い未使用のイベントハンドラをクリーンアップすることで、効率をあげられる
btn.removeEventListener('click', bgChange);