/* --------------------------------------------------------------------------------
    Events1
-------------------------------------------------------------------------------- */

var btn = document.querySelector('button');

function random(number) {
    // Math.random() で生成した浮動小数点の擬似乱数と変数 number に1を足した数で掛け
    // Math.floor 引数として与えた数以下の最大の整数にする
    // 255 を最大値にしたいので number に 1 を足している
    return Math.floor(Math.random() * (number + 1));
}

// 変数 btn がクリックされると実行される無名関数
btn.onclick = function() {

    // random 関数を使って生成した rgb カラーを ドキュメントの body 要素の backgroundColor に設定する
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}