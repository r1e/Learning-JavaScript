/* --------------------------------------------------------------------------------
   if...else statements
---------------------------------------------------------------------------------- */

// 変数 select に ドキュメントにある最初の select 要素を格納する
var select = document.querySelector('select');
// 変数 para に ドキュメントにある最初の p 要素を格納する
var para = document.querySelector('p');

// 変数 select 要素の値が変わったとき、関数 setWeather が実行される
select.addEventListener('change', setWeather);

// 変数 select の値によって変数 p の値が変わる関数
function setWeather() {

    var choice = select.value;

    if(choice === 'sunny') {
        para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
    } else if(choice === 'rainy') {
        para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
    } else if(choice === 'snowing') {
        para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
    } else if(choice === 'overcast') {
        para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    } else {
        para.textContent = '';
    }
}

/* ------------------------------------------------------------------------------*/

var cheese = 'Cheddar';

if(cheese) { // 変数 cheese に値が入っている(true)とき
    console.log('Yay! Cheese available for making cheese on toast.');
} else { // 変数 cheese に値が入っていない(false)とき
    console.log('No cheese on toast for you today.');
}

// Yay! Cheese available for making cheese on toast.

/* ------------------------------------------------------------------------------*/

var shoppingDone = 'false';

if(shoppingDone === true) { // 変数 shoppingDone が true のとき
    var childsAllowance = 10;
} else {
    var childsAllowance = 5;
}

console.log(childsAllowance); //5

//上記のif文は以下のように書き換えることもできる

var shoppingDone = false;

if(shoppingDone) { // 変数 shoppingDone が true のとき
    var childsAllowance = 10;
} else {
    var childsAllowance = 5;
}

console.log(childsAllowance); //5

/* ------------------------------------------------------------------------------*/

choice = 'sunny';
temperature = 90;

if(choice === 'sunny') {
    if(temperature < 86) {
        para.textContent = 'It is' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
    } else if (temperature >= 86) {
        para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
    }
}

console.log(para.textContent); //It is 90 degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.

//上記のif文は論理演算子を以下のように使うことで、同じ機能を持ったif文に書き換えることもできる

if(choice === 'sunny' && temperature < 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
} else if(choice === 'sunny' && temperature >= 86) {
    para.textContent = 'It is' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
}

console.log(para.textContent); //It is 90 degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.

/* ------------------------------------------------------------------------------*/

var iceCreamVanOutside = 'on fire';
var houseStatus = '';

if(iceCreamVanOutside || houseStatus === 'on fire') {
    console.log('You should leave the house quickly.');
} else {
    console.log('Probably should just stay in then.');
}

// You should leave the house quickly.

// 上記のif文は論理演算子を以下のように使うことで、同じ機能を持ったif文に書き換えることもできる

if(!(iceCreamVanOutside || houseStatus === 'on fire')) {
    console.log('Probably should just stay in then.');
} else {
    console.log('You should leave the house quickly.');
}

// You should leave the house quickly.