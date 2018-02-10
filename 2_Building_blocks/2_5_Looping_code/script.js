/* --------------------------------------------------------------------------------
    ループの演習2
-------------------------------------------------------------------------------- */

var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    
var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '


for (i = 0; i < people.length; i++) {
  if (people[i] === 'Phil' || people[i] === 'Lola') {
    refused.textContent += people[i] + ', ';
  } else {
    admitted.textContent += people[i] + ', ';
  }
}

// それぞれの変数のテキストコンテンツの最後から2文字目までの文字をスライスしてピリオドを加える
refused.textContent = refused.textContent.slice(0, refused.textContent.length -2) + '.';
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length -2) + '.';