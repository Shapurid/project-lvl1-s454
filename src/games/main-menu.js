import readlineSync from 'readline-sync';
import brainEven from './even';
import brainCalc from './calc';
import brainGcd from './gcd';
import brainProgression from './progression';
import brainPrime from './prime';

const chooseTheGame = () => {
  console.log('List of the games:\n1. Brain Even\n2. Brain Calc\n3. Brain GCD\n4. Brain Progression\n5. Brain Prime\n');
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
    case '4':
      brainProgression();
      break;
    case '5':
      brainPrime();
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
