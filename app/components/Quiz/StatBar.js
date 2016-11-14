import React from 'react';
import {ProgressBar} from 'react-bootstrap';

class StatBar extends React.Component {
    render() {
       

        return (
            <div>
                  <div className="row StatBar">
                            <div className="col-md-3">
                                <p>{this.props.statTitLeft}</p>
                            </div>
                            <div className="col-md-6">
                            <ProgressBar bsStyle={this.props.statColor} now={50} />
                            </div>
                            <div className="col-md-3">
                                <p>{this.props.statTitRight}</p>
                            </div>
                        </div>
            </div>
        )   
    }
}


export default StatBar;