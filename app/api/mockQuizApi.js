import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const questions = [
  {
    id: 1,
    title: 'question 1'
  },
  {
    id: 2,
    firstName: 'question 2'
  },
  {
    id: 3,
    firstName: 'question 3'
  }
];

class QuizApi {
  static getAllQuestion() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], questions));
      }, delay);
    });
  }
}

export default QuizApi;