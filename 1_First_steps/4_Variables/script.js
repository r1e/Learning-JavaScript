// 変数 button に ドキュメント内の最初の button 要素を格納する
var button = document.querySelector('button');

// 変数 button がクリックされたら無名関数が実行する
button.onclick = function() {
    //`What is your name?`と書かれた入力フォーム付きダイアログが表示される
    // 変数 name に入力された値を格納する
    var name = prompt('What is your name?');
    // 'Hello ' + 変数 name + ', nice to see you!'と書かれたアラートが表示される
    alert('Hello ' + name + ', nice to see you!');
}