/* --------------------------------------------------------------------------------
   配列の実験
---------------------------------------------------------------------------------- */

var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping); 

var sequence = [1, 1, 2, 3, 5, 8, 13];
console.log(sequence);

var random = ['tree', 795, [0, 1, 2]];
console.log(random);

console.log(shopping[0]); //bread

shopping[0] = 'tahini';

console.log(shopping[0]) //tahini

console.log(random[2][2]); //2

console.log(sequence.length); //7

var sequence = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
}

var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

// 文字列データをカンマ区切りにする
var myArray = myData.split(',');
console.log(myArray); 
console.log(myArray.length); //6
console.log(myArray[0]); //Manchester
console.log(myArray[1]); //London
console.log(myArray[myArray.length -1]) //Carlisle

// join メソッドでも文字列データをカンマ区切りにすることができる
var myNewString = myArray.join(',');
console.log(myNewString)

// カンマ区切りの文字列データにする
var dogNames = ["Rocket","Flash","Bella","Slugger"];
console.log(dogNames.toString());

// 配列に要素を追加する
myArray.push('Cardiff');
console.log(myArray); //'Cardiff' が追加される

// 配列に要素を追加する
myArray.push('Bradford', 'Brighton');
console.log(myArray); //'Bradford', 'Brighton'が追加される

// 配列に'Bristol'を追加し、かつ変数 newLength に格納する
var newLength = myArray.push('Bristol');
console.log(myArray);
console.log(newLength); //10

// 配列の最後の項目を削除し、かつ変数  removedItem に格納する
var removedItem = myArray.pop();
console.log(myArray); 
console.log(removedItem); //Bristol

// 配列の最初の項目に'Edinburgh'を追加する
myArray.unshift('Edinburgh');
console.log(myArray);

// 配列の最初の項目を削除する
var removedItem = myArray.shift();
console.log(myArray);
console.log(removedItem); //Edinburgh


/* --------------------------------------------------------------------------------
   # 演習1
     文字列を配列に変換し、請求書を作成する
---------------------------------------------------------------------------------- */

var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';

var data = 'Underpants:6.99,Socks:5.99,T-shirt:14.99,Trousers:31.99,Shoes:23.99';
// 文字列を配列にする
var products = data.split(',')

console.log(products);

for (var i = 0; i < products.length; i++) {

    // セミコロンの位置を抽出
    var semicolon = products[i].indexOf(':');
    // セミコロンの前を変数 name に格納
    var name = products[i].slice(0, semicolon - 1);
    // セミコロンの後を変数 price に格納
    var price = products[i].slice(semicolon + 1);
    // 変数 price の文字列を数字に変換
    var price = Number(price);
    // price を足していく
    total += price;
    // 文字列を連結
    itemText = name + ' --- $' + price;

    var listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);