import React from 'react'
import Quiz from './Quiz/Quiz'

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
            userInfor: {},
            previousCheckedvalue: '',
            progressBarValue: 0,
            progressBarMax: 0
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
    }

    componentWillMount() {
        const questionsInit = this.props.questions;
        const perOnPage = this.state.perOnPage;
        const progressBarValue = perOnPage;
        this.setState({
            questions: questionsInit.slice(0, perOnPage),
            currentStep: 1,
            totalStep: questionsInit.length / perOnPage,
            progressBarValue,
            progressBarMax: questionsInit.length
        })
        //console.log(this.props.userInfoData);
    }

    handleNextClick(event) {
        event.preventDefault();
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
        const questionId = event.target.name;

        if (this.state.previousCheckedvalue)
            this.clearClassName(questionId, this.state.previousCheckedvalue);

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
            name: event.target.name,
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
            question: questionChoosed,
            previousCheckedvalue: event.target.value
        })

        console.log(`Name ${event.target.name} with value = ${event.target.value}`);

    }

    clearClassName(questionId, checkedValue) {
        //normal constants
        const disagreeMax = 'disagree option max';
        const disagreeMed = 'disagree option med';
        const disagreeMin = 'disagree option min';
        const agreeMax = 'option agree max';
        const agreeMed = 'option agree med';
        const agreeMin = 'option agree min';
        const neutra = 'neutral option';

        let labelId = `[data-lblid=lbl${questionId}${checkedValue}]`;
        let lbl = document.querySelectorAll(labelId);

        let className = '';
        switch (checkedValue) {
            case '-3':
                className = disagreeMax;
                break;
            case '-2':
                className = disagreeMed;
                break;
            case '-1':
                className = disagreeMin;
                break;
            case '1':
                className = agreeMin;
                break;
            case '2':
                className = agreeMed;
                break;
            case '3':
                className = agreeMax;
                break;
            default:
                className = neutra;
                break;
        }

        lbl[0].className = `btn btn-default ${className}`;
    }

    handleFormSubmit(e) {
        e.preventDefault();

        this.setState({
            result: this.state.formValues,
            userInfo: this.props.userInfoData
        })

        const path = '/result';
        this.context.router.push(path)
    }

    render() {
        let questions = this.state.questions;
        let isLastStep = this.state.isLastStep;

        // if (this.state.result.length > 0) {
        //     return <Results results={this.state.result} userInfo={this.state.userInfo} />
        // }

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