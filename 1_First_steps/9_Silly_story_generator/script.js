var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random() * array.length)];
}

var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
var insertY = ["the soup kitchen", "Disneyland", "the White House"]
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

var randomize= document.querySelector('.randomize');
randomize.addEventListener('click', result);

function result() {

  // storyText を配列にする
  var newStory = storyText.split(':');

  // 配列のデータをデータをランダムに取得する
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
 
  // ランダムに取得したデータに置き換える
  newStory[1] = xItem;
  newStory[7] = xItem;
  newStory[3] = yItem;
  newStory[5] = zItem;

  if(customName.value != '') {
    var name = customName.value;

    newStory[6] = ". " + name + " saw the whole thing, but he was not surprised — ";

  if(document.getElementById('uk').checked) {

    var weight = Math.round(300);
    var temperature =  Math.round(94);

    // ポンドをストーンに変換し丸める
    var weight = Math.round(weight * 0.07142857);
    // 華氏を摂氏に変換し丸める
    var temperature = Math.round((temperature - 32) / 1.8000);
    
    newStory[0] = "It was "+ weight + 'stones' + " outside, so ";
    newStory[8] = " weighs " + temperature + ' centigrade,' + ' and it was a hot day.';
    
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

  }
}

