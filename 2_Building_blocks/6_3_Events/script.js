/* --------------------------------------------------------------------------------
    Events3
-------------------------------------------------------------------------------- */

var btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * number);
}

function bgChange(e) {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    // target イベントオブジェクトのプロパティはイベントが発生したばかりの要素への参照
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}

btn.addEventListener('click', bgChange);