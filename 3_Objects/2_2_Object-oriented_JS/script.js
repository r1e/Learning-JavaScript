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

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music']);
var person2 = new Person('Tarou', 'Tanaka', 45, 'male', ['cooking', 'skiing']);
var person3 = new Person('Hanako', 'Yamada', 28, 'female', ['reading', 'skiing','music']);
var person4 = new Person('Kanako', 'Suzuki', 36, 'female', ['movies', 'skiing', 'programing', 'reading']);

console.log(person1.bio()); // Bob Smith is 32 years old. He likes music.
console.log(person2.bio()); // Tarou Tanaka is 45 years old. He likes cooking and skiing.
console.log(person3.bio()); // Hanako Yamada is 28 years old. She likes reading, skiing and music.
console.log(person4.bio()); // Kanako Suzuki is 36 years old. She likes movies, skiing, programing and reading.