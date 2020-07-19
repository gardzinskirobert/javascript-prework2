
function playGame(playerInput){
  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let argComputerMove = getMoveName(randomNumber);
  let argPlayerMove = getMoveName(playerInput);

  console.log('Wylosowana liczba to: ' + randomNumber);
  console.log('Gracz wpisał: ' + playerInput);

  function getMoveName(moveName){
    if(moveName == 1){
      return 'kamień';
    }
    if(moveName == 2){
      return 'papier';
    }
    if(moveName == 3){
      return 'nożyce';
    }
      printMessage('Nie znam ruchu o id ' + moveName + '.');
      return 'nieznany ruch';
  }

  function displayResult(computer, player){
      printMessage('Zagrałem ' + computer + ', a Ty ' + player);

    if ( computer == 'kamień' && player == 'papier'){
      printMessage('Ty wygrywasz!');
    }
    if ( computer == 'nożyce' && player == 'kamień'){
      printMessage('Ty wygrywasz!');
    }
    if ( computer == 'papier' && player == 'nożyce'){
      printMessage('Ty wygrywasz!');
    }
    if ( computer == 'papier' && player == 'kamień'){
      printMessage('Tym razem przegrywasz');
    }
    if ( computer == 'kamień' && player == 'nożyce'){
      printMessage('Tym razem przegrywasz');
    }
    if ( computer == 'nożyce' && player == 'papier'){
      printMessage('Tym razem przegrywasz');
    }
    if ( argComputerMove == argPlayerMove ){
      printMessage('Remis');
    }

  }
  displayResult(argComputerMove, argPlayerMove);
}

document.getElementById('play-rock').addEventListener('click', function (){
  playGame(1);
} );
document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});
