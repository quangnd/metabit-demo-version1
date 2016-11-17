import React from 'react'
import RadioOption from '../common/RadioOption'
import RadioGroup from '../common/RadioGroup'

const Question = ({question, onChange}) => {
    return (
       <div className="col-sm-10 col-sm-offset-1"> 
        <div key={question.id} className="question-wrapper">
            <div className="statement">
                 {question.title}
            </div>
             <div className="row answer">
              <div className="col-sm-3 caption left">
                Không
              </div>
              
                <RadioGroup name={question.id} key={question.id}>
                    {question.choices.map(choice => {
                        let classDegreeName = ''
                        switch(choice.value) {
                            case '3':
                                classDegreeName = 'option agree max';
                                break;
                            case '2': 
                                classDegreeName = 'option agree med';
                                break;
                            case '1': 
                                classDegreeName = 'option agree min';
                                break;
                            case '0': 
                                classDegreeName = 'neutral option';
                                break;
                            case '-1': 
                                classDegreeName = 'disagree option min';
                                break;
                            case '-2': 
                                classDegreeName = 'disagree option med';
                                break;
                            case '-3': 
                                classDegreeName = 'disagree option max';
                                break; 
                            default:
                               classDegreeName = '';                              
                        }
                        
                       
                        let labelClassName = `btn btn-default ${classDegreeName}`;
                        return <RadioOption key={choice.value} label={""} value={choice.value} onChange={onChange} labelClassName={labelClassName} lblId={`lbl${question.id}${choice.value}`}/>
                    })}
                </RadioGroup>
            
           
             <div className="col-sm-3 caption right">
                Có
              </div>
              
            </div>

            
        </div>
    </div>
    )
}

Question.propTypes = {
    question: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired
}

export default Question;