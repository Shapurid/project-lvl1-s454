import gameBuild from '..';
import { randomNumber, makePairQuestionAnswer } from '../utils';

const description = 'What number is missing in the progression?';

const lengthOfProgression = 10;

const game = () => {
  const startOfProgression = randomNumber(1, 99);
  const step = randomNumber(2, 10);
  const hiddenElementPosition = randomNumber(2, lengthOfProgression);
  const findHiddenElementPosition = startOfProgression + step * (hiddenElementPosition - 1);
  let progression = '';
  for (let i = 1; i <= lengthOfProgression; i += 1) {
    const result = startOfProgression + step * (i - 1);
    if (i === hiddenElementPosition) {
      progression += ' ..';
    } else {
      progression += ` ${result}`;
    }
  }
  const question = progression.trim();
  const rightAnswer = String(findHiddenElementPosition);
  return makePairQuestionAnswer(question, rightAnswer);
};

export default () => gameBuild(description, game);
