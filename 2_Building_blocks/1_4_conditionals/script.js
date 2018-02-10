var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');


// カレンダーを作る関数 (うるう年は無視)
select.onchange = function() {
  var choice = select.value;

  // 変数 days を作成
  var days;

  // 変数 choice に入っている文字列に応じて 変数 days の値が変わる if 文 
  if (choice === 'February') {
      days = 28;
  } else if (choice === 'March' || choice === 'May' || choice === 'July' || choice === 'August' || choice === 'October' || choice === 'December') {
      days = 31;
  } else {
      days = 30;
  }

  // 関数 createCalendar を実行 
  createCalendar(days, choice);
}

// カレンダーを描画する関数
function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');
