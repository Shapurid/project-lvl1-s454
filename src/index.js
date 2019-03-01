import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './utils';

export default (desc, game) => {
  const numberOfQuestions = 3;
  console.log('Welcome to the Brain Games!');
  console.log(`${desc}\n`);
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
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
