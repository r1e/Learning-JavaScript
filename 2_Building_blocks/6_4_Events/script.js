/* --------------------------------------------------------------------------------
    Events4
-------------------------------------------------------------------------------- */

// 16 個の div 要素を作成し、body に追加する
for (var i = 1; i <= 16; i++) {
    var myDiv = document.createElement('div');
    document.body.appendChild(myDiv);
}

// Math.random() で生成した浮動小数点の擬似乱数と変数 number に1を足した数で掛け、Math.floor 引数として与えた数以下の最大の整数にする
// 255 を最大値にしたいので number に 1 を足している
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

// rgb をランダムに生成する関数
function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    // 生成した rgb を引数に返す
    return rndCol;
}

// 変数 divs に div 要素を全て格納する
var divs = document.querySelectorAll('div');

// div の数だけ繰り返す
for(var i = 0; i < divs.length; i++) {

    // 変数 divs に格納されている div[i] がクリックされたら実行する関数
    divs[i].onclick = function(e) {
        // クリックされた要素の backgroundColor に bgChange() 関数で生成したランダムな rgb を設定する
        e.target.style.backgroundColor = bgChange();
    }
}