import { cons, car, cdr } from 'hexlet-pairs';

export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const makePairQuestionAnswer = (question, answer) => cons(question, answer);

export const getQuestion = (pair) => car(pair);

export const getAnswer = (pair) => cdr(pair);
