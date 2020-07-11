import gameBuild from '..';
import { randomNumber, makePairQuestionAnswer } from '../utils';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  const question = randomNumber(1, 99);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return makePairQuestionAnswer(question, rightAnswer);
};

export default () => gameBuild(description, game);
