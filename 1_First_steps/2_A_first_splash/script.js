/* --------------------------------------------------------------------------------
    1.  1と100の間の乱数を生成する。
    2.  プレイヤーがターンしているターンナンバーを記録する。1で起動する。
    3.  番号が何であるかを推測する方法をプレイヤーに提供する。
    4.  推測が入力されたら、ユーザーが前の推測を見ることができるように表示する。
    5.  番号が正しいか確認する。
        5-1.正しい場合：
            メッセージ 'Congratulations! You got it right!' を表示する。
            推測を入力できないようにする。
            プレイヤーがゲームを再開できるようにする表示制御。
        5-2.間違っている場合：
            メッセージ "間違っている" を表示する。
            ターン数を1増加する。
        5-3.間違っていて、かつプレーヤーのターンが残っていない場合：
            メッセージ "ゲームオーバー" を表示する。
            推測を入力できないようにする。
            プレイヤーがゲームを再開できるようにする表示制御。
    7.  ゲームが再開したら、ゲームのロジックとUIを完全にリセットし、手順1に戻る。
---------------------------------------------------------------------------------- */

// 変数 randomNumber に生成した100までの乱数を格納する
// 0 から 99 が生成されるので +1 して 1 から 100 の数字にする
var randomNumber = Math.floor(Math.random() * 100) + 1;

// 変数 guesses に guessesクラスが付与された要素のうち最初のものを格納する
var guesses = document.querySelector('.guesses');
// 変数 lastResult に lastResult クラスが付与された要素のうち最初のものを格納する
var lastResult = document.querySelector(`.lastResult`);
// 変数 lowOrHi に lowOrHi クラスが付与された要素のうち最初のものを格納する
var lowOrHi = document.querySelector('.lowOrHi');

// 変数 guessSubmit に guessSubmit クラスが付与された要素のうち最初のものを格納する
var guessSubmit = document.querySelector('.guessSubmit');

// 変数 guessField に guessField クラスが付与された要素のうち最初のものを格納する
var guessField = document.querySelector('.guessField');

// 変数 guessCount に 1 を格納する
var guessCount = 1;
var resetButton;

// ユーザーの推測をチェックする関数
function checkGuess() {

    // 変数 userGuess に Number オブジェクトでラップした 変数 guessField にある値を格納する
    // Number オブジェクトでラップすると値を数値に変換してくれる。数値に変換できない値の場合は NaN を返す
    var userGuess = Number(guessField.value);

    // 変数 guessCount の値が 1 のとき、変数 guesses にテキストコンテンツを追加する
     if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    // 変数 guessesの テキストコンテンツに 変数 guesses のテキストコンテンツと
    // 変数 userGuess を足した値を格納する
    guesses.textContent += userGuess + ' ';

    // 変数 userGuess と 変数 randomNumber の値が同じとき、
    if (userGuess === randomNumber) {
        // 変数 lastResult にテキストコンテンツを追加する
        lastResult.textContent = 'Congratulations! You got it right!';
        // 変数 lastResult に格納されている要素の背景色を green にする
        lastResult.style.backgroundColor = 'green';
        // 変数 lowOrHi のテキストコンテンツを空にする
        lowOrHi.textContent = '';
        // setGameOver関数を呼び出す
        setGameOver();

    } else if (guessCount === 10) { // 変数 guessCount が 10 のとき
        // 変数 lastResult にテキストコンテンツを追加する
        lastResult.textContent = '!!!GAME OVER!!!';
        // setGameOver関数を呼び出す
        setGameOver();

    } else { // どれでもないとき
        // 変数 lastResult にテキストコンテンツを追加する
        lastResult.textContent = 'Wrong!'; 
        // 変数 lastResult に格納されている要素の背景を red にする
        lastResult.style.backgroundColor = 'red';

        // 変数 userGuess の値が 変数 randomNumber の値よりも小さいとき
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        // 変数 userGuess の値が 変数 randomNumber の値よりも大きいとき
        }  else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    // 変数 guessCountの値を +1 する
    guessCount++;
    // 変数 guessField の値を空にする
    guessField.value = '';
    //変数 guessField に focus メソッドを実行する
    guessField.focus();
}

// 変数　guessSubmit がクリックされたら checkGuess 関数を実行する
guessSubmit.addEventListener('click', checkGuess);


// ゲームオーバーのときの関数
function setGameOver() {
    // 変数 guessField を禁止状態にする
    guessField.disabled = true;
    // 変数 guessSubmit を禁止状態にする
    guessSubmit.disabled = true;
    // ドキュメント内に button 要素を生成し 変数 resetButton に格納する
    resetButton = document.createElement('button');
    // 変数 resetButton にテキストコンテンツを格納する
    resetButton.textContent = 'Start new game';
    // ドキュメントの body 内に 変数 resetButton の要素を追加する
    document.body.appendChild(resetButton);
    // 変数 resetButton がクリックされたら resetGame 関数を実行する
    resetButton.addEventListener('click', resetGame);
}


// ゲームをリセットする関数
function resetGame() {

    //変数 guessCount に 1 を格納する
    guessCount = 1;

    // 変数 resetParas に ドキュメント内の .resultParas クラスが付与されている要素の子要素 p を配列にして格納する
    var resetParas = document.querySelectorAll('.resultParas p');

    // 変数 resultParas のテキストコンテンツを空にする
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    // 変数 resetButton の親ノード内にある resetButton 要素を削除する
    resetButton.parentNode.removeChild(resetButton);

    // 変数 guessField の禁止状態を解除する
    guessField.disabled = false;
    // 変数 guessSubmit の禁止状態を解除する
    guessSubmit.disabled = false;
    // 変数 guessField の値を空にする
    guessField.value = '';
    //変数 guessField に focus メソッドを実行する
    guessField.focus();


    // 変数 lastResult に格納されている要素の背景色を white にする
    lastResult.style.backgroundColor = 'white';
    // 変数 randomNumber に生成した100までの乱数を格納する
    // 0-99 が生成されるので +1 して 1-100 の数字にする
    randomNumber = Math.floor(Math.random() * 100) + 1;
}