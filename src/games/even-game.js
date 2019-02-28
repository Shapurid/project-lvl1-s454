import { randomNumber, makePairQuestionAnswer, gameBuild } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  const question = randomNumber(1, 99);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return makePairQuestionAnswer(question, answer);
};

const brainEven = () => gameBuild(rules, game);
export default brainEven;
