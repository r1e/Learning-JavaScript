/* --------------------------------------------------------------------------------
    while and do...while
-------------------------------------------------------------------------------- */
for (var i = 0; i < cats.length; i++) {

  if (i === cats.length -1) {
    info += 'and ' +  cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }
}

// while 文と do while 文を使って上と同じ機能を持ったコードを以下のように書くことができる

// while 文
var i = 0;

while (i < cats.length) {
  if(i === cats.length -1) {
    info += 'and' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
}

// do while 文
var i = 0;

do {
  if (i === cats.length - 1) {
    info += 'and' + cats[i] + '';
  } else {
    info += cats[i] + ', ';
  }

  i++;
} while (i < cats.length);