import { randomNumber, makePairQuestionAnswer, gameBuild } from '..';

const rules = 'What is the result of the expression?';

const game = () => {
  const num1 = randomNumber(1, 99);
  const num2 = randomNumber(1, 99);
  const charOfExpression = randomNumber(0, 2);
  let question;
  let answer;
  if (charOfExpression === 0) {
    question = `${num1} + ${num2}`;
    answer = String(num1 + num2);
  } else if (charOfExpression === 1) {
    question = `${num1} - ${num2}`;
    answer = String(num1 - num2);
  } else {
    question = `${num1} - ${num2}`;
    answer = String(num1 - num2);
  }
  return makePairQuestionAnswer(question, answer);
};

const brainCalc = () => gameBuild(rules, game);
export default brainCalc;
