var correctAnswer;
var input = document.querySelector('input');
var button = document.querySelector('.button');
var result = document.querySelector('.result');

function draw(){
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var operatorArray= ['*','+','-'];
  var operator;
  var firstNumber;
  var secondNumber;
  
  ctx.save();
  ctx.fillStyle = 'white';
  ctx.fillRect(0,0, width, height);
  
  for (i = 0; i < 30; i++) {
    ctx.restore();
    ctx.strokeStyle = 'rgb(' + getRandom(0,255) + ', ' + getRandom(0,255) + ', ' +
                      getRandom(0, 255) + ')';
    ctx.beginPath();
    ctx.moveTo(getRandom(0, width), getRandom(0,height));
    ctx.lineTo(getRandom(0, width), getRandom(0,height));
    ctx.stroke();
  }
  
  ctx.restore();
  ctx.fillStyle = 'rgb(255,0,0)';
  ctx.font = '24px "Time New Roman"';
  operator = Math.floor(getRandom(0,3));
  ctx.fillText(operatorArray[operator], 130, 100);
  
  if (operator === 0) {
    firstNumber = Math.floor(getRandom(1,20));
    secondNumber = Math.floor(getRandom(1,20));
  } else {
    firstNumber = Math.floor(getRandom(1,100));
    secondNumber = Math.floor(getRandom(1,100));
  }

  ctx.fillText(firstNumber, 160, 80);
  ctx.fillText(secondNumber, 160, 110);
  ctx.fillText('-------', 130, 130);
  ctx.fillText('?', 170, 150);
  
  correctAnswer = eval(firstNumber + operatorArray[operator] + secondNumber);
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function checkAnswer() {
  if (input.value == correctAnswer) {
    result.style.color = 'rgb(0,255,0)';
    result.innerHTML = 'Masz rację';
  } else {
    result.style.color = 'rgb(255,0,0)';
    result.innerHTML = 'Błędna odpowiedź';
    draw();
    input.focus();
  }
}

draw();

button.onclick = checkAnswer;
