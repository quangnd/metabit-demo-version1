import React, { PropTypes } from 'react'

//Stateless Functional Components
const CheckBox = ({name, value, onChange, label}) => {  
        return (
            <div className="checkbox">
                <label>
                    <input type="checkbox"
                        name={name}
                        value={value}
                        onChange={onChange} />
                    {label}
                </label>
             </div>
        );  
}


CheckBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default CheckBox;