/* --------------------------------------------------------------------------------
  Skipping iterations with continue
-------------------------------------------------------------------------------- */

var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');
var num = input.value;

// btn がクリックしたら実行される関数
btn.addEventListener('click', function() {
  para.textContent = 'Output: ';
  var num = input.value;
  //input.focus();
  
  // 変数 input の数だけ実行される for 文
  for (var i = 1; i <= num; i++) {

    // 変数 sqRoot に i の平方根を格納する
    var sqRoot = Math.sqrt(i);

    // 変数 sqRoot に格納されている数以下の最大の正数が、変数 sqRoot に格納されている数と等しく無いとき、
    // 次のループにスキップする (平方根が整数かどうかをチェックする)
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }

    // if 文が実行されないとき、i にスペースを加えた値を、変数 para の最後に連結する
    para.textContent += i + ' ';

  }
});