import React, { PropTypes } from 'react'

//Stateless Functional Components
const RadioOption = ({name, value, onChange, label, labelClassName, lblId}) => {  
        return (
            <label className={labelClassName} data-lblId={lblId}>
                <input type="radio"
                    name={name}
                    value={value}
                    onChange={onChange} />
                {label}
             </label>
        );  
}


RadioOption.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string.isRequired
}

//Stateless Components
/*
class RadioOption extends React.Component {
    render() {
        return (
            <label className="radio-inline">
                <input type="radio"
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.handleOptionChange} />
                {this.props.label}
             </label>
        );
    }
}
*/

export default RadioOption;