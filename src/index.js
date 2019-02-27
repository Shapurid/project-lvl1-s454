import readlineSync from 'readline-sync';

export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const brainEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);
  const numberOfQuestions = 3;
  for (let i = 1; i <= numberOfQuestions; i += 1) {
    const question = randomNumber(1, 99);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const answerOfUser = readlineSync.question('Answer: ');
    if (answerOfUser === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export const greet = () => {
  console.log('Welcome to the Brain Games!\n');
  brainEven();
};
