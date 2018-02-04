/* --------------------------------------------------------------------------------
    1.  p セレクタをクリックすると入力フォーム付きのダイアログがでる。
    2.  1の入力フォームにテキストを入力しエンターを押下すると、
        p セレクタ内の文字が入力した文字に置き換わる。
---------------------------------------------------------------------------------- */

// 変数 para に p セレクタのうち最初のものを格納する
var para = document.querySelector('p');

// 変数 para にクリックイベントが発生したら updateName 関数が実行される
para.addEventListener('click', updateName);

// updateName 関数
function updateName() {
    // 「Enter a new name」と書かれた入力フォーム付きのダイアログがでる
    var name = prompt('Enter a new name');
    // 変数 para 内のテキストを置き換える
    para.textContent = 'Player 1: ' + name;
}