function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
    // 変数 string に共通の文字列を入れる
    var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. '
    // それぞれの性別だったときの文字列を変数 string に追加する
    if (this.gender === 'male') {
        string += 'He likes ';
    } else {
        string += 'She likes ';
    }
    if (this.interests.length === 1) { // interests が1つのとき
        string +=  this.interests[0] + '.';
    } else if (this.interests.length === 2) { // interests が2つのとき
        string += this.interests[0] + ' and ' + this.interests[1] + '.';
    } else { // interests の数がそれ以外(3つ以上のとき)
        for(var i = 0; i < this.interests.length; i++) {
            if(i === this.interests.length - 1) { // 最後の interests のとき
                string += ' and ' + this.interests[i] + '.';
            } else if (i === this.interests.length -2 ) { // 最後から2番目の interests のとき
                string += this.interests[i];
            } else {
                string += this.interests[i] + ', '
            }
        }
    }
    alert(string);
    };
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
}

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing'])
console.log(person1.valueOf()) // オブジェクトの値が表示される

console.log(Person.prototype); 
console.log(Object.prototype); // プロパティに定義された多数のメソッドが表示される

var person2 = Object.create(person1);
console.log(person2.__proto__) // parson1 のオブジェクトを返す

// 同じ結果になる
console.log(person1.constructor);
console.log(person2.constructor);

var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
console.log(person3.name.first); // Karen
console.log(person3.age); // 26
console.log(person3.bio()); // アラートで'Karen Stephenson is 26 years old. She likes playing drums and mountain climbing.'

console.log(person1.constructor.name); //Person

var person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

Person.prototype.farewell = function() {
    alert(this.name.first + ' has left the building. Bye for now!');
};

person1.farewell(); // アラートで'Tammi has left the building. Bye for now!'

// 関数スコープではなくグローバルスコープなので、this は機能しない
console.log(Person.prototype.fullName = this.name.first + ' ' + this.name.last); // undefined undefined