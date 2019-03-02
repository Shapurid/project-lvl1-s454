import gameBuild from '..';
import { randomNumber, makePairQuestionAnswer } from '../utils';

const description = 'What number is missing [1min[22m the progression?';

const game = () => {
  const startOfProgression = randomNumber(1, 99);
  const step = randomNumber(2, 10);
  const lengthOfProgression = 10;
  const hiddenElement = randomNumber(2, lengthOfProgression);
  const foundedElement = startOfProgression + step * (hiddenElement - 1);
  let progression = '';
  for (let i = 1; i <= lengthOfProgression; i += 1) {
    const result = startOfProgression + step * (i - 1);
    if (i === hiddenElement) {
      progression += ' ..';
    } else {
      progression += ` ${result}`;
    }
  }
  const question = `${progression}`;
  const rightAnswer = String(foundedElement);
  return makePairQuestionAnswer(question, rightAnswer);
};

export default () => gameBuild(description, game);
