import gameBuild from '..';
import { randomNumber, makePairQuestionAnswer } from '../utils';

const description = 'What is the result of the expression?';

const game = () => {
  const num1 = randomNumber(1, 99);
  const num2 = randomNumber(1, 99);
  const charOfExpression = randomNumber(0, 2);
  let question;
  let rightAnswer;
  switch (charOfExpression) {
    case 0:
      question = `${num1} + ${num2}`;
      rightAnswer = String(num1 + num2);
      break;
    case 1:
      question = `${num1} - ${num2}`;
      rightAnswer = String(num1 - num2);
      break;
    default:
      question = `${num1} * ${num2}`;
      rightAnswer = String(num1 * num2);
      break;
  }
  return makePairQuestionAnswer(question, rightAnswer);
};

export default () => gameBuild(description, game);
