import React from 'react'
import Quiz from './Quiz/Quiz'
import { animateScrollTo, total } from '../library/commonFuncs'


class QuizContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            formValues: [],
            result: [],
            questions: [],
            perOnPage: 5,
            currentStep: 1,
            totalStep: 0,
            isLastStep: false,
            userInfo: {},
            progressBarValue: 0,
            progressBarMax: 0
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
    }

    componentWillMount() {
        require('smoothscroll-polyfill').polyfill();
        const questionsInit = this.props.questions;
        const perOnPage = this.state.perOnPage;
        const progressBarValue = perOnPage;
        this.setState({
            questions: questionsInit.slice(0, perOnPage),
            userInfo: this.props.userInfoData,
            currentStep: 1,
            totalStep: questionsInit.length / perOnPage,
            progressBarValue,
            progressBarMax: questionsInit.length
        })
    }

    componentDidMount() {
         document.querySelector('#app').scrollIntoView({ behavior: 'smooth' });
    }

    handleNextClick(event) {
        event.preventDefault();

        document.querySelector('.progress').scrollIntoView({ behavior: 'smooth' });

        let currentTotalQuestion = this.state.perOnPage * this.state.currentStep;
        let currentQuestions = this.props.questions.slice(currentTotalQuestion, currentTotalQuestion + this.state.perOnPage);
        //console.log(currentQuestions);
        let currentStep = this.state.currentStep;
        let progressBarValue = currentStep === 1
            ? this.state.progressBarValue + this.state.perOnPage
            : currentTotalQuestion + this.state.perOnPage

        currentStep++;
        const isLastStep = currentStep === this.state.totalStep ? true : false;

        //console.log(currentQuestions);
        this.setState({
            questions: currentQuestions,
            progressBarValue,
            isLastStep,
            currentStep
        })
    }

    handleOptionChange(event) {
        const questionName = event.target.name.split('|');
        const questionId = questionName[0];
        const questionGroup = questionName[1];

        
            this.clearClassName(questionId);

        if (event.target.checked) {
            //active constants
            const disagreeActiveMax = 'disagree option disagreeActive max';
            const disagreeActiveMed = 'disagree option disagreeActive med';
            const disagreeActiveMin = 'disagree option disagreeActive min';
            const agreeActiveMax = 'option testing max';
            const agreeActiveMed = 'option testing med';
            const agreeActiveMin = 'option testing min';
            const neutralActive = 'neutralActive option';

            let labelId = `[data-lblid=lbl${questionId}${event.target.value}]`;
            let lbl = document.querySelectorAll(labelId);

            let className = '';
            switch (event.target.value) {
                case '-3':
                    className = disagreeActiveMax;
                    break;
                case '-2':
                    className = disagreeActiveMed;
                    break;
                case '-1':
                    className = disagreeActiveMin;
                    break;
                case '1':
                    className = agreeActiveMin;
                    break;
                case '2':
                    className = agreeActiveMed;
                    break;
                case '3':
                    className = agreeActiveMax;
                    break;
                default:
                    className = neutralActive;
                    break;
            }

            lbl[0].className = `btn btn-default ${className}`;

        }
        let questionChoosed = {
            id: questionId,
            questionGroup,
            value: event.target.value
        };
        let formValues = this.state.formValues;

        //check if question.id existed then replace
        let existed = false;
        formValues.forEach(ques => {
            if (ques.id === questionId) {
                ques.value = event.target.value;
                existed = true;
            }
        })

        if (!existed) formValues.push(questionChoosed);

        this.setState({
            formValues,
            question: questionChoosed
        })

        //console.log(`Question ${event.target.name} with value = ${event.target.value}`);
    }

    clearClassName(questionId) {
        //normal constants
        const disagreeMax = 'disagree option max';
        const disagreeMed = 'disagree option med';
        const disagreeMin = 'disagree option min';
        const agreeMax = 'option agree max';
        const agreeMed = 'option agree med';
        const agreeMin = 'option agree min';
        const neutra = 'neutral option';

        var checkedValueArr = [-3, -2, -1, 0, 1, 2, 3];
        for (let i = 0; i < checkedValueArr.length; i++) {
            let labelId = `[data-lblid=lbl${questionId}${checkedValueArr[i]}]`;
            
            let lbl = document.querySelectorAll(labelId);

            let className = '';
            switch (checkedValueArr[i]) {
                case -3:
                    className = disagreeMax;
                    break;
                case -2:
                    className = disagreeMed;
                    break;
                case -1:
                    className = disagreeMin;
                    break;
                case 1:
                    className = agreeMin;
                    break;
                case 2:
                    className = agreeMed;
                    break;
                case 3:
                    className = agreeMax;
                    break;
                case 0:
                    className = neutra;
                    break;
            }

            
            lbl[0].className = `btn btn-default ${className}`;
        }

    }

    checkElementInArray(ele, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === ele.id)
                return true;
        }
        return false;
    }
    handleFormSubmit(e) {
        e.preventDefault();

        //set remain question to neutral value (0)
        var formValueArr = this.state.formValues.slice();
        var questionArr = this.props.questions;
        for (let i = 0; i < questionArr.length; i++) {
            if (!this.checkElementInArray(questionArr[i], formValueArr)) {
                formValueArr.push({
                    id: questionArr[i].id,
                    questionGroup: questionArr[i].questionGroup,
                    value: 0
                })
            }
        }

        this.setState({
            formValues: formValueArr,
            result: this.state.formValues,
            userInfo: this.props.userInfoData
        });

        let resultObj = {
            "quizResult": formValueArr
        }

        //Save user 
        fetch('/api/createUserInfo', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userInfo: this.state.userInfo,
                quizResult: resultObj
            })
        }).then(function (data) {
            console.log('request succeeded with JSON response', data)
        }).catch(function (error) {
            console.log('request failed', error)
        });

        let userId = this.props.userInfoData.userId;
        const path = `/result/${userId}`;

        this.context.router.push(path);
    }

    render() {
        let questions = this.state.questions;
        let isLastStep = this.state.isLastStep;

        return (
            <Quiz questions={questions}
                isLastStep={isLastStep}
                onSubmit={this.handleFormSubmit}
                onNext={this.handleNextClick}
                onOptionChange={this.handleOptionChange}
                progressBarValue={this.state.progressBarValue}
                progressBarMax={this.state.progressBarMax}
                />
        )
    }
}


QuizContainer.contextTypes = {
    router: React.PropTypes.object
};

export default QuizContainer;