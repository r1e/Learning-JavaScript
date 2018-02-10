/* --------------------------------------------------------------------------------
  The standard for loop
-------------------------------------------------------------------------------- */

var cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
var info = 'My cats are called ';
var span = document.querySelector('span');

// 変数 cats に格納されている配列の数だけ処理を繰り返す for 文
for (var i = 0; i < cats.length; i++) {

  // 最後のときは and をつけてピリオドで終わる
  if (i === cats.length -1) {
    info += 'and ' +  cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }
}

span.textContent = info;

/* --------------------------------------------------------------------------------
  Exiting loops with break
-------------------------------------------------------------------------------- */

var contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Diane:9384975'];
var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');

// btn がクリックされたら実行される関数
btn.addEventListener('click', function(){
  var searchName = input.value;
  input.value = '';
  input.focus();

  // 変数 contacts に格納されている配列の数だけ実行される for 文 
  for (var i = 0; i < contacts.length; i++) {

    // 変数 contacts[i]  ':'の前後で配列を作る 
    var splitContact = contacts[i].split(':');

    if (splitContact[0] === searchName) {
      para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
      break;
    } else {
      para.textContent = 'Contact not found.';
    }
  }
});