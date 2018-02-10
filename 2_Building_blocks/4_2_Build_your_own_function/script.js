/* --------------------------------------------------------------------------------
    https://github.com/r1e/Learning-JavaScript/blob/master/2_Building_blocks/4_1_Build_your_own_function/script.js
    上記のコードを改善し、より複雑なパラメータを渡す
-------------------------------------------------------------------------------- */

function displayMessage(msgText, msgType) {

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
    // 変数 msg にパラメーター msgText を格納する
    msg.textContent = msgText;
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

    // msgType の種類によって msg のスタイルを変える if 文
    if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(warning.png)';
        panel.style.backgroundColor = 'red';
    } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(chat.png)';
        panel.style.backgroundColor = 'aqua';
    } else {
        msg.style.paddingLeft = '20px';
    }
}

var btn = document.querySelector('button');

// 変数 btn がクリックされたときに実行する無名関数
btn.onclick = function() {
    displayMessage('Brian: Hi there, how are you today?','chat');
}