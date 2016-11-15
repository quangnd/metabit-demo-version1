import React from 'react';
import RadioOption from './RadioOption'

class RadioGroup extends React.Component {
    renderChildren(props) {
        return React.Children.map(this.props.children, child => {
            if (child.type === RadioOption) {
                return React.cloneElement(child, {
                    name: this.props.name
                })
            }
            
            return child;
        })
    }

    render() {
        return(
            <div className="col-sm-6 btn-group options">
                {this.renderChildren(this.props)}
            </div>
        );
    }
}

export default RadioGroup;
