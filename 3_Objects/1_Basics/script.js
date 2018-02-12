var person = {
    name: {
        // サブネームスペース
        first: 'Bob',
        last: 'Smith'
    },
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],

    // 関数(オブジェクトのメソッド)になっているオブジェクトをオブジェクトリテラルと呼ぶ
    // 一連の構造化された関連するデータを転送する場合、オブジェクトリテラルを使用してオブジェクトを作成することが多い
    // 一つのオブジェクトを送信する方が複数のアイテムを個別に送信するよりもはるかに効率的になる
    bio: function() {
        // this は現在のオブジェクトを参照する
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and' + this.interests[1] + '.');
    },
    greeting: function() {
        alert('Hi! I\'m ' + this.name[0] + '.');
    }
};

// ドット表記を使用してオブジェクトのプロパティとメソッドにアクセスする
console.log(person.name.first); // Bob
console.log(person.age); // 32
console.log(person.interests[1]); //skiing
//console.log(person.bio()); // アラートで'Bob Smith is 32 years old. He likes music andskiing.'
//console.log(person.greeting()); // アラートで'Hi! I'm Bob.'

// ブラケット表記を使用してオブジェクトのプロパティにアクセスする
console.log(person['age']); // 32
console.log(person['name']['first']); //Bob

// ドット表記やブラケット表記を使用して値を設定(更新) することができる
person.age = 45;
person['name']['last'] = 'Cratchit';

console.log(person.age); // 45
console.log(person['name']['last']); // Cratchit

// 新しいメンバーを作成することもできる
person['eyes'] = 'hazel';
person.farewell = function() { alert('Bye everybody!'); };

console.log(person['eyes']); // hazel
console.log(person.farewell()); // アラートで'Bye everybody!'