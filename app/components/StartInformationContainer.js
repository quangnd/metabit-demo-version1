import React from 'react'
import StartInformation from './Quiz/StartInformation'
import {validateEmail} from '../library/commonFuncs'

class StartInformationContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            userInfo: {},
            error: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);  
    }

    renderError() {
        if (this.state.error) {
         let errorStyle = {color: 'red', textAlign: 'center'};
         return (
           <div style={errorStyle}>
           
             {this.state.error.map((error,i) => {
                 return <p key={i}>{error}</p>
             })}
             
           </div>
    		 ); 
       }
    }

    validateInput() {
        let errors = [];
        let fullName = this.state.userInfo.fullName;
        let email = this.state.userInfo.email;
        let age = this.state.userInfo.age;
        let gender = this.state.userInfo.gender;
        let subjects = this.state.userInfo.subjects;
        let subjectScores = this.state.userInfo.subjectScores;
        let hobbies = this.state.userInfo.hobbies;

        if (!fullName) { //empty or undefined
            errors.push('Bạn phải nhập họ tên.');
        }
        if (!email) {
            errors.push('Bạn phải nhập email.');
        } 
        else {
            if (!validateEmail(email)) {
                errors.push('Email phải đúng định dạng.');
            }
        }
        if (!age) { 
            errors.push('Bạn phải nhập tuổi.');
        }
        else {
            if (isNaN(age)) {
                errors.push('Tuổi phải có dạng số.');
            }
            else if (age > 60 || age < 5) {
                errors.push('Tuổi phải nhỏ hơn 60 và lớn hơn 5 :D.');
            }
        }
        
        if (!gender) {
            errors.push('Bạn phải chọn giới tính');
        }
        if (!subjects || subjects.length === 0) {
            errors.push('Bạn phải chọn ít nhất một môn học.');
        } 
        if (!subjectScores || subjectScores.length === 0) {
            errors.push('Bạn phải chọn ít nhất một môn học với điểm tương ứng.');
        }
        if (!hobbies || hobbies.length === 0) {
            errors.push('Bạn phải chọn ít nhất một sở thích.');
        }

        if (errors.length > 0) { 
            this.setState({error: errors});
        }
        else {
            this.setState({error: false})
            return true;
        }
    }

    handleNextClick(event) {
        event.preventDefault();
        let formData = this.state.userInfo;
        
        if (this.validateInput()) {
            this.props.updateUserInfo({
                userInfo: this.state.userInfo
            })
        }   
    }

    handleChange(event) {
        let inputName = event.target.name;
        let inputValue = event.target.value;

        let userInfo = this.state.userInfo;

        if (inputName === 'fullName') userInfo.fullName = inputValue;
        if (inputName === 'email') userInfo.email = inputValue;
        if (inputName === 'age') userInfo.age = inputValue;
        if (inputName === 'gender') userInfo.gender = inputValue;
        if (inputName === 'otherSubject') userInfo.otherSubject = inputValue;
        if (inputName === 'otherSubjectScore') userInfo.otherSubjectScore = inputValue;
        if (inputName === 'otherHobby') userInfo.otherHobby = inputValue;

        let subjects = this.state.userInfo.subjects === undefined ? [] : this.state.userInfo.subjects;
        if (inputName === 'subject') {
            if (event.target.checked) 
                subjects.push(inputValue);
            else
                subjects.splice(subjects.indexOf(inputValue), 1);
        } 
        userInfo.subjects = subjects;

        let subjectScores = this.state.userInfo.subjectScores === undefined ? [] : this.state.userInfo.subjectScores;
        if (inputName === 'subjectScore') {
            if (event.target.checked) 
                subjectScores.push(inputValue);
            else
                subjectScores.splice(subjectScores.indexOf(inputValue), 1);
        } 
        userInfo.subjectScores = subjectScores;

        let hobbies = this.state.userInfo.hobbies === undefined ? [] : this.state.userInfo.hobbies;
        if (inputName === 'hobby') {
            if (event.target.checked)
                hobbies.push(inputValue);
            else
                hobbies.splice(hobbies.indexOf(inputValue), 1);
        }
        userInfo.hobbies = hobbies;
        userInfo.userId = Math.floor(Date.now() / 1000); //assign userId = current timestamp

        this.setState({
            userInfo,
            error: false
        })
        //console.log(userInfo);
    }

    render() {
         var errorMessage = this.renderError();
        return(
            
            <StartInformation subjects={this.props.subjects} 
                              hobbies={this.props.hobbies}
                              onNextClick={this.handleNextClick} 
                              onChange={this.handleChange}
                              errorMessage={errorMessage}/>
        )
    }
}

export default StartInformationContainer