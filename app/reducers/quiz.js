import { LOAD_QUESTIONS_SUCCESS } from '../actions/actionTypes'

export default function quiz(state = [], action) {
    switch(action.type) {
        case LOAD_QUESTIONS_SUCCESS:
            return action.questions;
        default:
            return state;
    }
}