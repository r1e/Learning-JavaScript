/* --------------------------------------------------------------------------------
    Build_your_own_function
-------------------------------------------------------------------------------- */
function displayMessage() {

    // 変数 html に html 要素を格納する
    var html = document.querySelector('html');

    // div 要素を作成し、変数 panel に格納する
    var panel = document.createElement('div');
    // 変数 panel に格納されている要素の class に msgBox を設定する
    panel.setAttribute('class', 'msgBox');
    // 変数 html に子要素として変数 panel を追加する
    html.appendChild(panel);

    // p 要素を作成し、変数 msg に格納する
    var msg = document.createElement('p');
    // 変数 msg に文字列を格納する
    msg.textContent = 'THis is a message box';
    // 変数 panel に子要素として変数 msg を格納する
    panel.appendChild(msg);

    // button 要素を格納し、変数 closeBtn に格納する
    var closeBtn = document.createElement('button');
    // 変数 closeBtn に文字列を格納する
    closeBtn.textContent = 'x';
    // 変数 panel に 変数 closeBtn を格納する
    panel.appendChild(closeBtn);

    // 変数 closeBtn をクリックすると無名関数が実行する
    closeBtn.onclick = function() {
        // 変数 panel を削除する
        panel.parentNode.removeChild(panel);
    }
}

var btn = document.querySelector('button');
// displayMessage()と記述すると btn をクリックしなくても関数が実行する
// ()はすぐに関数を実行する場合のみ使用する。
btn.onclick = displayMessage;