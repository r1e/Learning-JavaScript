function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function() {
        alert('Hi! I\'m ' + this.name + '.');
    };
    return obj;
}

var salva = createNewPerson('Salva');

console.log(salva.name); // salva
console.log(salva.greeting()); // アラートで'Hi! I'm Salva.'

// 関数 createNewPerson を以下のように簡略化できる
function Person(name) {
    this.name = name;
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name + '.');
    };
}

// new を使って新しいオブジェクトインスタンスを作成する
var person1 = new Person('Bob');
var person2 = new Person('Sarah');

console.log (person1.name); // Bob
console.log (person1.greeting()); // アラートで'Hi! I'm Bob.'
console.log (person2.name); // Sarah
console.log (person2.greeting()); // アラートで'Hi! I'm Sarah'

// Persons()コンストラクタ関数
function Persons(first, last, age, gender, interests) {
    this.name = {
        'first': first,
        'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
}

var persons1 =  new Persons('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

console.log(persons1['age']); //32
console.log(persons1.interests[1]); //skiing
console.log(persons1.bio()); // アラートで'Bob Smith is 32 years old. He likes music and skiing.'


var person1 = new Object(); // 空のオブジェクトが作成される

// 空のオブジェクトにプロパティとメソッドを追加する
person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
};

/* ------------------------------------------
以下のようにオブジェクトの作成とプロパティ・メソッドの追加を一緒にすることもできる

var person1 = new Object({
    name: 'Chris',
    age: 38,
    greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    }
  });
------------------------------------------ */

console.log(person1.name); // Chris
console.log(person1.age); // 38
console.log(person1.greeting()); // アラートで'Hi! I'm Chris.'


// create()は指定されたプロトタイプオブジェクトとプロパティを持つ新しいオブジェクトを作成
// create()は IE8 でサポートされていない
var person2 = Object.create(person1);

console.log(person2.name); // Chris
console.log(person2.greeting()); // アラートで'Hi! I'm Chris.'