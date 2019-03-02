import gameBuild from '..';
import { randomNumber, makePairQuestionAnswer } from '../utils';

const description = 'Answer "yes" [1mif[22m given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const stopChecking = number / 2;
  for (let i = 2; i <= stopChecking; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const num = randomNumber(2, 100);
  const question = num;
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return makePairQuestionAnswer(question, rightAnswer);
};

export default () => gameBuild(description, game);
