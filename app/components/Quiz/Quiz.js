import React from 'react'
import Question from './Question'
import { ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Quiz = ({questions, isLastStep, onSubmit, onNext, onOptionChange}) => {
    return (
        <div className="test-component">


            <div className="row test-notice">
                <div className="col-sm-offset-3 col-sm-6">
                    <p className="text-center">Three things you need to know before taking the test</p>
                </div>
            </div>


            <div className="row test-graphic">
                <div className="col-sm-offset-1 col-sm-2">
                    <img src="images/notice_01.png" className="img-responsive center-block" />
                    <p className="text-center">Take less than 12 minutes</p>
                </div>
                <div className="col-sm-offset-2 col-sm-2">
                    <img src="images/notice_02.png" className="img-responsive center-block" />
                    <p className="text-center">Answer honestly even if you don’t like the answer</p>
                </div>
                <div className="col-sm-offset-2 col-sm-2">
                    <img src="images/notice_03.png" className="img-responsive center-block" />
                    <p className="text-center">Try not to leave any “neutral” answers</p>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                    <ProgressBar now={10} label={10} />
                </div>
            </div>

            <form onSubmit={onSubmit}>
                {questions.map(question => (
                    <Question key={question.id} question={question} onChange={onOptionChange}/>
                ))
                }
                <div style={{ paddingTop: 10 }}>
                    {isLastStep
                        ? <button className="btn btn-primary center-block" type="submit">Save</button>
                        : <button className="btn btn-action center-block" onClick={onNext}>Next</button>
                    }
                </div>
            </form>
        </div>
    )
}

Quiz.propTypes = {
    questions: React.PropTypes.array.isRequired,
    isLastStep: React.PropTypes.bool.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    onNext: React.PropTypes.func.isRequired,
    onOptionChange: React.PropTypes.func.isRequired
}

export default Quiz;