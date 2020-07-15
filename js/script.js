function clearMessages();
function playGame(playerInput){
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);

  function getMoveName(randomNumber){
    if(randomNumber == 1){
      return 'kamień';
    }
    if(randomNumber == 2){
      return 'papier';
    }
    if(randomNumber == 3){
      return 'nożyce';
    }
  }
  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  console.log('Gracz wpisał: ' + playerInput);

  let argPlayerMove = getMoveName(playerInput);

  /*  printMessage('Mój ruch to: ' + argComputerMove);*/

  function getMoveName(playerInput){
    if(playerInput == 1){
      return 'kamień';
    }
    if(playerInput == 2){
      return 'papier';
    }
    if(playerInput == 3){
      return 'nożyce';
    }
    else
    printMessage('Nie znam ruchu o id ' + playerInput + '.'); {}
      return 'nieznany ruch';
    }
  function displayResult(argComputerMove, argPlayerMove){
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }
    if ( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    }
    else {
      printMessage ('Tym razem przegrywasz :(');
    }
    if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Ty wygrywasz!');
    }
    else {
      printMessage ('Tym razem przegrywasz :(');
    }
    if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Ty wygrywasz!');
    }
    else {
      printMessage ('Tym razem przegrywasz :(');
    }
    if ( argComputerMove == argPlayerMove ){
      printMessage('Remis');
      return 'Remis'  }
  }
}
/*playGame(3);*/
document.getElementById('play-rock').addEventListener('click', function playGame(playerInput'));
document.getElementById('play-paper').addEventListener('click', function playGame(playerInput));
document.getElementById('play-scissors').addEventListener('click', function playGame(playerInput);
