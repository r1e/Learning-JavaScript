var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;

  // この書き方でもあっているが、case 内を update('white', 'black') と書いた方がよかった
  switch(choice) {
    case 'white':
      bgColor = 'white';
      textColor = 'black';
      break;
    case 'black':
      bgColor = 'black';
      textColor = 'white';
      break;
    case 'purple':
      bgColor = 'purple';
      textColor = 'white';
      break;
    case 'yellow':
      bgColor = 'yellow';
      textColor = 'black';
      break;
    case 'psychedelic':
      bgColor = 'lime';
      textColor = 'purple';
  }
  update(bgColor, textColor);
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}