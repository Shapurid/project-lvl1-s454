import readlineSync from 'readline-sync';
import brainEven from './even-game';
import brainCalc from './calc-game';
import brainGcd from './gcd-game';

const chooseTheGame = () => {
  console.log('List of the games:\n1. Brain Even\n2. Brain Calc\n3. Brain GCD\n');
  console.log('If you want to exit, enter 0.\n');
  const choice = readlineSync.question('Please, enter the number of the game: ');
  switch (choice) {
    case '1':
      brainEven();
      break;
    case '2':
      brainCalc();
      break;
    case '3':
      brainGcd();
      break;
    case '0':
      break;
    default:
      console.log('No such option. Choose again, please.');
      return chooseTheGame();
  }
  return null;
};

export default chooseTheGame;
