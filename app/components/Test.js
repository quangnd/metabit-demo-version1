import React from 'react';
import {Checkbox,Radio,FormGroup} from 'react-bootstrap';


class Test extends React.Component {
  

  render() {
    return (
      <div className="container">
            <FormGroup>
                <Radio inline>
                    1
            </Radio>
                {' '}
                <Radio inline>
                    2
      </Radio>
                {' '}
                <Radio inline>
                    3
      </Radio>
            </FormGroup>
      </div>
    );
  }
}



export default Test;
