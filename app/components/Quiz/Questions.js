import React from 'react';
import { ProgressBar, FormGroup, Radio } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class Questions extends React.Component {
  render() {
    const progressBarVal = 10;


    return (
      <div className="container test-component">
        <div className="row">

          <div className="col-md-12 personality-test">
            <div className="visible-lg-block">

              <div className="row">
                <div className="col-md-12">
                  <div className="test-title text-center">
                    <h1>Personality test</h1>
                  </div>
                
                  <div className="trademark text-center">
                    Based on Metabit Explorer<sup>®</sup>
                  </div>
                 </div> 
              </div>

              <div className="row instruction">
                <div className="col-md-8 col-md-offset-1">
                  <h4>Three things to know before taking the test:</h4>
                  <ol>
                    <li>Takes less than 12 minutes.</li>
                    <li>Answer honestly, even if you don’t like the answer.</li>
                    <li>Try not to leave any “neutral” answers.</li>
                  </ol>
                </div>
              </div>

            </div>

              <div className="col-md-10 col-md-offset-1">
                <ProgressBar now={progressBarVal}label={`${progressBarVal}%`}/>
              </div>
            {/* Begin form  */}

            <form method="POST" action="" id="test-form">
              <div className="col-md-10 col-md-offset-1">
                <div className="question-wrapper set1">
                  <div className="statement text-center">
                    Bạn thấy khó để giao tiếp với người khác
                </div>
                  <div className="row answer">
                    <div className="col-md-5 col-md-offset-3">
                      <FormGroup>
                        <Radio name="answerOptions" inline>
                          -3
                            </Radio>
                        {' '}
                        <Radio name="answerOptions" inline>
                          -2
                            </Radio>
                        {' '}
                        <Radio name="answerOptions" inline>
                          -1
                          </Radio>
                        <Radio name="answerOptions" inline>
                          0
                            </Radio>
                        {' '}
                        <Radio name="answerOptions" inline>
                          1
                            </Radio>
                        {' '}
                        <Radio name="answerOptions" inline>
                          2
                          </Radio>
                        <Radio name="answerOptions" inline>
                          3
                          </Radio>
                      </FormGroup>
                    </div>
                  </div>
                </div>

                <div className="question-wrapper set1">
                  <div className="statement text-center">
                    Bạn rất hiếm khi chủ động bắt chuyện
                </div>
                  <div className="row answer">
                    <div className="col-md-5 col-md-offset-3">
                      <FormGroup>
                        <Radio name="answerOptions2" inline>
                          -3
                        </Radio>
                        {' '}
                        <Radio name="answerOptions2" inline>
                          -2
                        </Radio>
                        {' '}
                        <Radio name="answerOptions2" inline>
                          -1
                      </Radio>
                        <Radio name="answerOptions2" inline>
                          0
                        </Radio>
                        {' '}
                        <Radio name="answerOptions2" inline>
                          1
                        </Radio>
                        {' '}
                        <Radio name="answerOptions2" inline>
                          2
                      </Radio>
                        <Radio name="answerOptions2" inline>
                          3
                      </Radio>
                      </FormGroup>
                    </div>
                  </div>
                </div>

                <div className="question-wrapper set1">
                  <div className="statement text-center">
                    Bạn luôn gặp khó khăn trong việc tha thứ
                </div>
                  <div className="row answer">
                    <div className="col-md-5 col-md-offset-3">
                      <FormGroup>

                        <Radio name="answerOptions" inline>
                          -3
                    </Radio>
                        {' '}
                        <Radio name="answerOptions" inline>
                          -2
                    </Radio>
                        {' '}
                        <Radio name="answerOptions" inline>
                          -1
                   </Radio>
                        <Radio name="answerOptions" inline>
                          0
                    </Radio>
                        {' '}
                        <Radio name="answerOptions" inline>
                          1
                    </Radio>
                        {' '}
                        <Radio name="answerOptions" inline>
                          2
                   </Radio>
                        <Radio name="answerOptions" inline>
                          3
                   </Radio>
                      </FormGroup>
                    </div>
                  </div>
                </div>


                <div className="row test-submit-wrapper">
                  <div className="col-md-4 col-md-offset-5">
                    <div className="submit_wrapper setnext">

                    <LinkContainer to={{ pathname: '/result' }}>
                       <button className="btn btn-action" id="nextbut" type="button"><span>NEXT&nbsp;</span></button>
                    </LinkContainer>

                    </div>

                  </div>
                </div>
              </div>
            </form>
            {/* End form  */}

          </div>
        </div>

      </div>
    );
  }
}

export default Questions;
