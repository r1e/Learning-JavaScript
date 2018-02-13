/* コピペ始まり ---------*/

var input = document.querySelector('input');
var btn = document.querySelector('button');
var para = document.querySelector('p');

btn.onclick = function() {
  var code = input.value;
  para.textContent = eval(code);
}

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.bio = function() {
  var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
  var pronoun;
  // check what the value of gender is, and set pronoun
  // to an appropriate value in each case
  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    pronoun = 'He likes ';
  } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    pronoun = 'She likes ';
  } else {
    pronoun = 'They like ';
  }

  // add the pronoun string on to the end of the main string
  string += pronoun;

  // use another conditional to structure the last part of the
  // second sentence depending on whether the number of interests
  // is 1, 2, or 3
  if(this.interests.length === 1) {
    string += this.interests[0] + '.';
  } else if(this.interests.length === 2) {
    string += this.interests[0] + ' and ' + this.interests[1] + '.';
  } else {

    // if there are more than 2 interests, we loop through them
    // all, adding each one to the main string followed by a comma,
    // except for the last one, which needs an and & a full stop
    for(var i = 0; i < this.interests.length; i++) {
      if(i === this.interests.length - 1) {
        string += 'and ' + this.interests[i] + '.';
      } else {
        string += this.interests[i] + ', ';
      }
    }
  }

  // finally, with the string built, we alert() it
  alert(string);
};

Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};

/* コピペ終わり ---------*/

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
}
var person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);

console.log(person1.name); // {first: "Tammi", last: "Smith"}
console.log(person1.farewell()); // アラートで'Tammi has left the building. Bye for now!'


// Teacher() 関数を作成する
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {
  var prefix;

  if(this.genger === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mrs.';
  } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
}

var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');

console.log(teacher1.name.first); // Dave
console.log(teacher1.interests[0]); // football
console.log(teacher1.bio()); // アラート'Dave Griffiths is 31 years old. He likes football and cookery.'
console.log(teacher1.subject); // mathematics
console.log(teacher1.greeting()); // アラート'Hello. My name is Mx. Griffiths, and I teach mathematics.'
console.log(teacher1.farewell()); // アラート'Dave has left the building. Bye for now!'


function Student(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function() {
  alert('Yo! I\'m ' + this.name.first + '.');
};

var student1 = new Student('Liz', 'Sheppard', 17, 'female', ['ninjitsu', 'air cadets']);

console.log(student1.name.first); //Liz
console.log(student1.interests[0]); //ninjitsu
console.log(student1.bio()); //Liz Sheppard is 17 years old. She likes ninjitsu and air cadets.
console.log(student1.subject); // undefined
console.log(student1.greeting()); //Yo! I'm Liz.
console.log(student1.farewell()); //Liz has left the building. Bye for now!