import gameBuild from '..';
import { randomNumber, makePairQuestionAnswer } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const stopChecking = number / 2;
  for (let i = 2; i <= stopChecking; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const num = randomNumber(2, 101);
  const question = num;
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return makePairQuestionAnswer(question, rightAnswer);
};

export default () => gameBuild(description, game);
