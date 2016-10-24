import QuizApi from '../api/mockQuizApi.js';
import { LOAD_QUESTIONS_SUCCESS } from './actionTypes'


export function loadQuestionsSuccess(questions) {
    return {
        type: LOAD_QUESTIONS_SUCCESS,
        questions
    }
}

export function loadQuestions() {
    return (dispatch) => {
        return QuizApi.getAllQuestion()
                    .then(questions => {
                        dispatch(loadQuestionsSuccess(questions));
                    })
                    .catch(error => {
                        throw(error);
                    });
    }
}