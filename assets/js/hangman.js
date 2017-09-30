window.onload = function(){

  var words;          
  var word;             
  var guess;             
  var lives;             
  var count;           
  var space;              

  var choice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var guessed=[];

  var numOfLives = document.getElementById("printLives");

  
  function reset(){
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    start();
  }
  document.getElementById('reset').onclick = function() 
  {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    start();
  }
  function result() 
  {
    wordHolder = document.getElementById('selectedWord');
    correct = document.createElement('ul');

    for (i = 0; i < word.length; i++)
    {
      correct.setAttribute('id', 'theWord',);
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") 
      {
        guess.innerHTML = "-";
        space = 1;
      } else 
      {
        guess.innerHTML = "_";
      }

      guessed.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  function alerts() 
  {
    numOfLives.innerHTML = "Guesses left: " + lives;
    if (lives <= 0) 
    {
      numOfLives.innerHTML = "Game Over";
      setTimeout(function(){
          reset();
        }, 1500);
    }
    if (count + space === guessed.length) 
    {
      numOfLives.innerHTML = "You Win!";
      setTimeout(function(){
         reset();
      }, 1500);
        
    }
    
  }
  
  function isTrue() 
  {
    list.onclick=function() 
    {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      for (var i = 0; i < word.length; i++) 
      {
        if (word[i] === geuss) 
        {
          guessed[i].innerHTML = geuss;
          count++;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) 
      {
        lives--;
        alerts();
      } else 
      {
        alerts();
      }
    }
  }

  function buttons() 
  {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (i = 0; i < choice.length; i++) 
    {
      letters.id = 'letters';
      list = document.createElement('li');
      list.id = 'letters';
      list.innerHTML = choice[i];
      isTrue();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
  
  function start() 
  {
    words = ["stone-quackers","futurama","aqua-teen-hunger-force","big-mouth","south-park","family-guy","american-dad","rick-and-morty","bobs-burgers","archer","one-punch-man","bojack-horseman","brickleberry","f-is-for-family","pacific-heat","squidbillies",];

    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    buttons();

    guessed=[];
    count = 0;
    space = 0;
    lives = 6;
    result();
    alerts();
  }

  start();
 
}