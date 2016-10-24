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
              <h1 bsClass="header">Personality Test</h1>
              <p>Let's find your personality type!</p>
              
                  <LinkContainer to={{ pathname: '/contact' }}>
                    <Button className="btn btn-danger">Take the Test</Button>
                  </LinkContainer>
              
            </div>
          </div>
        </div>
        
        <div className="body-type">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1 className="header">Personality Type</h1>
              <div className="row">
                <div className="col-sm-3">
                  <img src="http://placehold.it/150x150"/>
                  <h3>Guardian</h3>
                </div>
                <div className="col-sm-3">
                  <img src="http://placehold.it/150x150"/>
                  <h3>Artist</h3>
                </div>
                <div className="col-sm-3">
                  <img src="http://placehold.it/150x150"/>
                  <h3>Idealist</h3>
                </div>
                <div className="col-sm-3">
                  <img src="http://placehold.it/150x150"/>
                  <h3>Rational</h3>
                </div>
              </div>
              
                  
              
            </div>
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
