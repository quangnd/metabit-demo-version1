import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import { Button, Jumbotron } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
       
       
        <Messages messages={this.props.messages} />
        
       

          <div className="intro-header">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1 className="header">Personality Test</h1>
                <p>Let's find your personality type!</p>
                
                    <LinkContainer to={{ pathname: '/questions' }}>
                      <Button className="btn btn-danger">Take the Test</Button>
                    </LinkContainer>
                
              </div>
            </div>
          </div>

          <div className="row about-test">
            <div className="col-sm-8 col-sm-offset-2">
              <h3 className="header text-center">About the Test</h3>
                
              
              
              <p className="text-center">
                The MBTI personality test will help you to discover your temperaments. Since the dawn of time, we have tried to describe and categorize ourselves in many ways. From the four temperaments of the Ancient civilizations – sanguine, choleric, melancholic and phlegmatic – to the latest advances in psychology, people have been restless in their pursuit of a good, reliable way to fit something as complex and fluid as human personality into a well-defined model. We are still some time away from being able to do that, although the current models account for the majority of our personality traits and can often predict with a high degree of confidence how we are likely to behave in specific circumstances. 
              </p>
            </div>
          </div>
          
        </div>
     
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
