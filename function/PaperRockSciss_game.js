
// Game: rock, paper, scissors
    // Rock destroys scissors.
    // Scissors cut paper.
    // Paper covers rock.
    // If there's a tie, then the game ends in a draw.
    // user choose bomb => won all


    const getUserChoice = (userInput) => {
      userInput = userInput.toLowerCase();
      if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
      } else {
        console.log('error');
      }
    }
    //console.log(getUserChoice('paper'));
    
    const getComputerChoice = () => {
     randomNo = Math.floor(Math.random() *4);
      switch(randomNo) {
        case 0: 
          return 'rock';
          break;
        case 1: 
          return 'paper';
          break;
        case 2: 
          return 'scissors';
          break;
        case 2: 
          return 'bomb';
          break;
        default:
          return 'error!';
          break;
      }
    }
    //console.log(getComputerChoice(1));
    
    const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
        return 'The game was a tie';
      } else if (userChoice === 'rock') {
          if(computerChoice === 'paper') {
            return 'Computer won';
          } else {
            return 'User won';
          }
      } else if ( userChoice === 'paper') {
          if (computerChoice === 'scissors') {
            return 'Computer won';
          } else {
            return 'User won';
          }
      } else if ( userChoice === 'bomb') {
          return 'User won';
      } else {
          if( computerChoice === 'scissors') {
            return 'Computer won';
          } else {
            return 'User won';
          }
      }
    }
    //console.log(determineWinner('paper', 'scissors'));
    
    const playGame = () => {
      let userChoice = getUserChoice('bomb');
      let computerChoice = getComputerChoice();
      console.log('User choose: ' +userChoice);
      console.log('Computer choose: ' +computerChoice);
      console.log(determineWinner(userChoice, computerChoice));
    }
    playGame();