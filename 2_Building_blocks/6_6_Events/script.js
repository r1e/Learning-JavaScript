/* --------------------------------------------------------------------------------
    Events6
-------------------------------------------------------------------------------- */
var btn = document.querySelector('button');
var videoBox = document.querySelector('div');
var video = document.querySelector('video');


// 変数 btn をクリックすると実行する関数
btn.onclick = function() {

    // 変数 videoBox にクラスを変更する
    videoBox.setAttribute('class', 'showing');
};

// 変数 videoBox をクリックすると実行する関数
videoBox.onclick = function() {
    //変数 videoBox にクラスを変更する
    videoBox.setAttribute('class', 'hidden');
};

// 変数 video をクリックすると実行する関数
video.onclick = function(e) {
    // キャプチャフェーズとバブリングフェーズでのイベントの伝播を防ぐ
    // 現在のブラウザーではデフォルトですべてのイベントハンドラーがバブリングフェーズに登録されている。
    e.stopPropagation();
    // 動画が再生する
    video.play();
};
