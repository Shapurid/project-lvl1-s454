import gameBuild from '..';
import { randomNumber, makePairQuestionAnswer } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const game = () => {
  const num1 = randomNumber(1, 50);
  const num2 = randomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(gcd(num1, num2));
  return makePairQuestionAnswer(question, rightAnswer);
};

export default () => gameBuild(description, game);
