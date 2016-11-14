import React from 'react';
import { ProgressBar, FormGroup, Radio } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class Questions extends React.Component {
  render() {
    const progressBarVal = 10;


    return (
      <div className="container-fluid test-component">

        <div className="row test-title">
          <div className="col-sm-12">
            <div className="text-center">
              <p>Personality test</p>
            </div>
          </div>
        </div>


        <div className="row test-notice">
          <div className="col-sm-offset-3 col-sm-6">
            <p className="text-center">Three things you need to know before taking the test</p>
          </div>
        </div>


        <div className="row test-graphic">
          <div className="col-sm-offset-1 col-sm-2">
            <img src="images/notice_01.png" className="img-responsive center-block" />
            <p className="text-center">Take less than 12 minutes</p>
          </div>
          <div className="col-sm-offset-2 col-sm-2">
            <img src="images/notice_02.png" className="img-responsive center-block" />
            <p className="text-center">Answer honestly even if you don’t like the answer</p>
          </div>
          <div className="col-sm-offset-2 col-sm-2">
            <img src="images/notice_03.png" className="img-responsive center-block" />
            <p className="text-center">Try not to leave any “neutral” answers</p>
          </div>
        </div>



        <div className="col-sm-10 col-sm-offset-1">
          <ProgressBar now={progressBarVal} label={`${progressBarVal}%`} />
        </div>
        {/* Begin form  */}

        <form method="POST" action="" id="test-form">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="question-wrapper set1">
              <div className="statement">
                Bạn thấy khó để giao tiếp với người khác
                </div>
              <div className="row answer">

                <div className="col-sm-offset-2 col-sm-1">
                  <h3 className="text-center">Agree</h3>
                </div>

                <div className="col-sm-6">
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

                <div className="col-sm-1">
                  <h3 className="text-center">Disagree</h3>
                </div>
             
              </div>
            </div>

            <div className="question-wrapper set1">
              <div className="statement text-center">
                Bạn rất hiếm khi chủ động bắt chuyện
                </div>
              <div className="row answer">
             
              <div className="col-sm-offset-2 col-sm-1">
                  <h3 className="text-center">Agree</h3>
                </div>

                <div className="col-sm-6">
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
                 <div className="col-sm-1">
                  <h3 className="text-center">Disagree</h3>
                </div>
              </div>
            </div>

            <div className="question-wrapper set1">
              <div className="statement">
                Bạn luôn gặp khó khăn trong việc tha thứ
                </div>
              <div className="row answer">
              <div className="col-sm-offset-2 col-sm-1">
                  <h3 className="text-center">Agree</h3>
                </div>
                <div className="col-sm-6">
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
                 <div className="col-sm-1">
                  <h3 className="text-center">Disagree</h3>
                </div>
              </div>
            </div>


            <div className="row test-submit-wrapper">
              <div className="col-sm-offset-5 col-sm-2">
                <div className="submit_wrapper setnext">

                  <LinkContainer to={{ pathname: '/result' }}>
                    <button className="btn btn-action center-block" id="nextbut" type="button"><span>NEXT&nbsp;</span></button>
                  </LinkContainer>

                </div>

              </div>
            </div>
          </div>
        </form>
        {/* End form  */}

      </div>



    );
  }
}

export default Questions;
