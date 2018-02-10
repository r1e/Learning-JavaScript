/* --------------------------------------------------------------------------------
    ループの演習1
-------------------------------------------------------------------------------- */

var output = document.querySelector('.output');
output.innerHTML = '';


// 10 が 0 になるまで実行される for 文

for (var i = 10; i >= 0; i--) {
  var para = document.createElement('p');

  if (i === 10) {
    para.textContent = 'Countdown 10';
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);
}

/* --------------------------------------------------------------------------------
    上の for 文を while 文や do while 文で書き換えると以下のようになる
-------------------------------------------------------------------------------- */

// while 文

var i = 10;

while (i >= 0) {
  var para = document.createElement('p');

  if (i === 10) {
    para.textContent = 'Countdown 10';
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);

   i--;
}

// do while 文

var i = 10;

do {
  var para = document.createElement('p');

  if (i === 10) {
    para.textContent = 'Countdown 10';
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);

  i--;
} while (i >= 0 );