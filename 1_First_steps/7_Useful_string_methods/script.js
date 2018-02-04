/* --------------------------------------------------------------------------------
    文字列メソッドの実験
---------------------------------------------------------------------------------- */

var browserType = 'mozilla';

// 文字の数
console.log(browserType.length); //7
// 配列[0]の値
console.log(browserType[0]); //m
// 配列[6]の値
console.log(browserType[browserType.length-1]);//a
// 部分文字列'zilla'は配列[2]から始まる
console.log(browserType.indexOf('zilla'));//2
// 部分文字列'vanilla'はメインストリングに文字列がない
console.log(browserType.indexOf('vanilla')); //-1

// 配列[0]から3番目までの文字列を抽出
console.log(browserType.slice(0, 3)); //moz
// 配列[2]以降の文字列
console.log(browserType.slice(2)); //zilla

var radData = 'My NaMe Is MuD';
// 文字列を小文字に変換
console.log(radData.toLowerCase()); //my name is mud
// 文字列を大文字に変換
console.log(radData.toUpperCase()); //MY NAME IS MUD

//'moz'を'vam'に置き換え
console.log(browserType.replace('moz', 'vam')); //vamilla


/* --------------------------------------------------------------------------------
    # 演習1
    `Christmas`が入っている文字列のみ抽出する
---------------------------------------------------------------------------------- */

// 変数 list にドキュメント内の最初の .output クラスが付与されている要素の子要素 ul を格納する
var list = document.querySelector('.output ul');

// 変数 list 内の HTML を空にする;
list.innerHTML  = '';

// 変数 greetings に文字列の配列を格納する
var greetings = ['Happy Birthday!',
    'Merry Chry Love',
    'A happy Christmas to all the family',
    'You\'re all I want for Christmas',
    'Get well soon'];

// 変数 greetings の配列数まで繰り返し処理をする
for (var i = 0; i < greetings.length; i++) {
    // 変数 input に 変数 greetings[i] を格納する
    var input = greetings[i];
    //greetings[i]に'Christmas'という文字があるとき
    if (greetings[i].indexOf('Christmas') !== -1) {
        // 変数 result に 変数 input を格納する
        var result = input;
        // エレメント li を生成し、変数 listitem に格納する
        var listitem = document.createElement('li');
        // 変数 listitem のテキストコンテンツに 変数 result を格納する
        listitem.textContent = result;
        // 変数 list に 変数 listitem 内の要素を追加する
        list.appendChild(listitem);
    }
}


/* --------------------------------------------------------------------------------
    # 演習2
    文字列の大文字・小文字を正規化する
---------------------------------------------------------------------------------- */

var list = document.querySelector('.output2 ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for(var i = 0; i < cities.length; i++) {

    var input = cities[i];
    // 文字列を全て小文字にする
    var lower = input.toLowerCase();
    // 文字列の最初の文字だけ大文字にする
    var upper = lower[0].toUpperCase();
    // 変数 name 正規化した文字列をに格納する
    var name = lower.replace(lower[0], upper);

    var result = name;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
}


/* --------------------------------------------------------------------------------
    # 演習3
    文字列を判別して置き換えて正規化する
---------------------------------------------------------------------------------- */

var list = document.querySelector('.output3 ul');
list.innerHTML = '';

var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
    var input = stations[i];

    // 変数 input の最初から3番目までの文字列を抽出する
    var code = input.slice(0, 3);
    // 変数 input の';'の位置を抽出する
    var semicolon = input.indexOf(';');
    // 変数 input の`;`以降の文字列を抽出する
    var stationName = input.slice(semicolon + 1);
    // 文字列を連結する
    var stationList = code + ': ' + stationName;

    var result = stationList;
    var listitem = document.createElement('li');
    listitem.textContent = result;
    list.appendChild(listitem);
}