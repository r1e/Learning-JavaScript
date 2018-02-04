/* --------------------------------------------------------------------------------
    1.  button をクリックすると「You clicked the button!」と書かれた
        Pセレクタが生成される。
---------------------------------------------------------------------------------- */

// createParagraph 関数
function createParagraph() {
    // 変数 para に p セレクタを生成するメソッドを格納する
    var para = document.createElement('p');
    // 変数 para にテキストを追加する
    para.textContent = 'You clicked the button!';
    // 変数 para をドキュメントの body の最後に追加する
    document.body.appendChild(para);
}

// 変数 buttons にドキュメント内の全ての button 要素を格納する 
var buttons = document.querySelectorAll('button');

// 変数 buttons 内に格納されている要素がクリックされたら createParagraph 関数が実行される
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
}
