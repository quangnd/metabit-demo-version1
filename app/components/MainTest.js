import React, { Component } from 'react';
//import '../lib/bootstrap/css/bootstrap.css';
import subjectJson from './data/subjects.json';
import hobbyJson from './data/hobbies.json';
import questionJson from './data/questionsFull.json';
import QuizContainer from './QuizContainer';
import StartInformationContainer from './StartInformationContainer';

class MainTest extends Component {
    constructor() {
        super();

        this.state = {
            userInformation: {},
            currentStep: 1
        }

        this.updateUserInfo = this.updateUserInfo.bind(this);
    }

    updateUserInfo(userInfo) {
        let userInformation = Object.assign({}, this.state.userInformation, userInfo); //for many steps if need
        let currentStep = this.state.currentStep + 1;
        this.setState({
            userInformation,
            currentStep
        })
    }

    render() {
        let initComponent;
        switch (this.state.currentStep) {
            case 1:
                initComponent = <StartInformationContainer subjects={subjectJson.list}
                    hobbies={hobbyJson.list}
                    wakeQuizUp={this.handleWakeQuizUp}
                    updateUserInfo={this.updateUserInfo} />;
                break;
            case 2:
                initComponent = <QuizContainer questions={questionJson.questions}
                    userInfoData={this.state.userInformation.userInfo} />;
                break;

        }

        return (


            <div className="container-fluid">
                <div className="row test-title">
                    <div className="col-sm-12">
                        <div className="text-center">
                            <p>Personality test</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        {initComponent}
                    </div>
                </div>
            </div>

        );
    }
}

export default MainTest;
