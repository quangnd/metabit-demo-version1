import React from 'react';
import {ProgressBar} from 'react-bootstrap';

class StatBar extends React.Component {
    render() {
        let mindClassName = "progress";
        
        if (this.props.psBarMindRight
           || this.props.psBarEnergyRight
           || this.props.psBarNatureRight
           || this.props.psBarTacticsRight) {
               
            mindClassName = "progress progress-right"
        }
        let widthValue = Math.round(this.props.value / 35 * 100);
        let width = widthValue + '%';
        return (
            <div>
                  <div className="row StatBar">
                            <div className="col-md-3">
                                <p>{this.props.statTitLeft}</p>
                            </div>
                            <div className="col-md-6">
                                    <div className={mindClassName}>
                                        <div className={`progress-bar ${this.props.statColor}`} role="progressbar" 
                                            aria-valuenow={this.props.value} aria-valuemin="0" aria-valuemax={35}
                                            style={{"width": width}}>
                                            <span className="sr-only"></span>
                                        </div>
                                    </div>
                                        
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