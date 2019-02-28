import readlineSync from 'readline-sync';
import brainEven from './games/even-game';
import brainCalc from './games/calc-game';

export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const cons = (x, y) => f => f(x, y);

export const car = pair => pair(x => x);

export const cdr = pair => pair((x, y) => y);

export const makePairQuestionAnswer = (question, answer) => cons(question, answer);

export const getQuestion = pair => car(pair);

export const getAnswer = pair => cdr(pair);

export const gameBuild = (rules, game) => {
  const numberOfQuestions = 3;
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}\n`);
  const username = readlineSync.question('What is your name? ', { defaultInput: 'Anonymous' });
  console.log(`Hello, ${username}!\n`);
  for (let i = 1; i <= numberOfQuestions; i += 1) {
    const fixPair = game();
    const question = getQuestion(fixPair);
    const correctAnswer = getAnswer(fixPair);
    console.log(`Question: ${question}`);
    const answerOfUser = readlineSync.question('Answer: ');
    if (correctAnswer === answerOfUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export const chooseTheGame = () => {
  console.log('List of the games:\n1. Brain Even\n2. Brain Calc\n');
  console.log('If you want to exit, enter 0.\n');
  const choice = readlineSync.question('Please, enter the number of the game: ');
  switch (choice) {
    case '1':
      brainEven();
      break;
    case '2':
      brainCalc();
      break;
    case '0':
      break;
    default:
      console.log('No such option. Choose again, please.');
      return chooseTheGame();
  }
  return null;
};
