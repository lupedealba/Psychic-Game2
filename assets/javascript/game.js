
function main () {
    var guesseslimit = 9;
    var wins = 0;
    var losses = 0;
    var guesses = guesseslimit;
    var guess = [];
  
    var directionsText = document.getElementById("directions-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("Guesses-left-text");
    var guessesSoFarText = document.getElementById("Guesses-so-far-text");
    var gameStatusText = document.getElementById("game-status-text");
  
    var computerChoice = randomLetter();
  
    console.log("We're looking for:", computerChoice);
  
    // Process keypresses
    document.onkeypress = function(event) {
        var userGuess = event.key;
        console.log("The user's guess is:", userGuess);
  
        console.log("So far they've guessed:", guess);
        console.log("They have ", guesses, " left.");
  
        // Check if they got it right and act accordingly
        if( userGuess === computerChoice ){
            // User wins!
            wins++;
            guesses = guesseslimit;
            guess = [];
            gameStatusText.textContent = "You got it! OK, I've thought of another letter. Press any key to guess it!";
            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        } else {
            // Wrong Answer
            console.log("nope...");
            if( guess.includes(userGuess) ) {
                gameStatusText.textContent = "You already tried that one. Guess again!";
            } else {
                guesses--;
                guess.push(userGuess);
                gameStatusText.textContent = "Nope! Guess again!";
            }
        }
  
        // Checking if they're out of guesses and act accordingly
        if( guesses < 1 ) {
            console.log("Out of guesses!");
            guesses = guesseslimit;
            guess = [];
            losses++;
            gameStatusText.textContent = "Better luck next time! I've thought of another letter. Press any key to guess it!";
            computerChoice = randomLetter();
        }
  
        // Update HTML score
        guessesLeftText.innerHTML = guesses;
        guessesSoFarText.innerHTML = guess;
        winsText.innerHTML = wins;
        lossesText.textContent = losses;
    };
  }
  
  function randomLetter() {
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l', 'm','n','o','p','q','r','s','t','u','v','w','x','y', 'z'];
    var thisLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  
    console.log("We're looking for:", thisLetter);
    return thisLetter;
  }
  
  // DO THE GAME!
  window.onload = function() {
    main();
  };
  