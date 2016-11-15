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
                <div className="col-sm-6 col-sm-offset-1">
                  <img src="images/brand.png" className="img-responsive center-block"/>
                </div>
                <div className="col-sm-5 metabit-cto">
                  <h1 className="header-text">Metabit Test</h1>
                  <LinkContainer to={{ pathname: '/metabit-test' }}>
                    <Button className="btn cto-button">Take the Test<i className="fa fa-hand-pointer-o click-icon"></i></Button>
                  </LinkContainer>
                  <p className="header-subtext">Explore yourself !</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <p className="text-center metabit-headline">"Solving Problems by knowing yourself !"</p>
            </div>
          </div>


          <div className="row text-center metabit-types">
            <div className="col-sm-2 col-sm-offset-2">
              <img src="images/monster_01.png" className="img-responsive center-block"/>
              <h4>Artists</h4>
            </div>
            <div className="col-sm-2 ">
              <img src="images/monster_02.png" className="img-responsive center-block"/>  
              <h4>Rationals</h4>
            </div>
            <div className="col-sm-2 ">
              <img src="images/monster_03.png" className="img-responsive center-block"/>  
              <h4>Idealists</h4>
            </div>
            <div className="col-sm-2">
              <img src="images/monster_04.png" className="img-responsive center-block"/>  
              <h4>Guardians</h4>
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
