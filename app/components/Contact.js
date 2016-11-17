import React from 'react';
import { connect } from 'react-redux'
import { submitContactForm } from '../actions/contact';
import Messages from './Messages';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(submitContactForm(this.state.name, this.state.email, this.state.message));
  }

  render() {
    return (  
      <div className="container-fluid">

        <div className="row our-team">
          <div className="col-md-12 text-center">
            <p>Our Team</p>
          </div>
        </div>

        <div className="row team-content">
          <div className="col-sm-offset-2 col-sm-8">
            <p className="text-center"><i className="fa fa-hand-peace-o fa-5x" aria-hidden="true"></i></p>
            <p className="text-center">We are a team of young entrepreneurs, researchers, geeks trying to customize the education system</p>
          </div>
        </div>



        <div className="row contact-form">
            <div className="col-sm-8 col-sm-offset-2">
              <div className="panel">
                <div className="panel-heading">
                  <h3 className="panel-title">Contact Form</h3>
                </div>
                <div className="panel-body">
                  <Messages messages={this.props.messages} />
                  <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
                    <div className="form-group">
                      <label htmlFor="name" className="col-sm-2">Name</label>
                      <div className="col-sm-8">
                        <input type="text" name="name" id="name" className="form-control" value={this.state.name} onChange={this.handleChange.bind(this)} autoFocus />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="col-sm-2">Email</label>
                      <div className="col-sm-8">
                        <input type="email" name="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="col-sm-2">Body</label>
                      <div className="col-sm-8">
                        <textarea name="message" id="message" rows="7" className="form-control" value={this.state.message} onChange={this.handleChange.bind(this)}></textarea>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-8">
                        <button type="submit" className="btn btn-default center-block form-button">SEND</button>
                      </div>
                    </div>
                  </form>
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

export default connect(mapStateToProps)(Contact);
