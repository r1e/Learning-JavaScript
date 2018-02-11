var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for (var i = 1; i <= 5; i ++) {

  // img の src を生成する
  var srcURL = 'images/pic' + i +'.jpg'

  // img を新たに作成する
  var newImage = document.createElement('img');
  // img の属性を設定する
  newImage.setAttribute('src', srcURL);
  // この書き方でもあっているが、以下のようにすることで変数をつくらなくてもよくなる
  /*-----------------------------------------
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  ------------------------------------------*/

  // 変数 thumBar に newImage を新たに追加する
  thumbBar.appendChild(newImage);

  // newImage がクリックされたら displayedImage の src 属性が変わる関数
  newImage.onclick = function() {
    displayedImage.setAttribute('src', this.getAttribute('src'));
  };
  // この書き方でもあっているがこれまでの学習で this はまだ出てきてないので、以下のように書くべきだった
  /*-----------------------------------------
    newImage.onclick = function(e) {
    var imgSrc = e.target.getAttribute('src');
    displayImage(imgSrc); } 
  ------------------------------------------*/
};

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {

  if (btn.getAttribute('class') === 'dark') {

    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';

  } else {

    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.0)';

  };
};
