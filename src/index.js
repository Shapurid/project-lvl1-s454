import readlineSync from 'readline-sync';

export const brainEven = () => {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);
  for (let i = 1; i <= 3; i += 1) {
    const question = randomNumber(1, 99);
    console.log(`Question: ${question}`);
    const answerOfUser = readlineSync.question('Answer: ');
    if (question % 2 === 0 && answerOfUser !== 'yes') {
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${username}!`);
      break;
    } else if (question % 2 !== 0 && answerOfUser !== 'no') {
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${username}!`);
      break;
    } else {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${username}!`);
      }
    }
  }
};


export const greet = () => {
  console.log('Welcome to the Brain Games!\n');
  brainEven();
};
