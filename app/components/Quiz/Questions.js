import React from 'react';
import { ProgressBar, FormGroup, Radio } from 'react-bootstrap';

class Questions extends React.Component {
  render() {
    const progressBarVal = 10;


    return (
      <div className="container test-component">
        <div className="row">

          <div className="col-md-12 personality-test">
            <div className="visible-lg-block">

              <div className="test-title">
                <h1>Personality test</h1>
              </div>

              <div className="trademark">
                Based on Metabit Explorer<sup>®</sup>
              </div>

              <p>Three things to know before taking the test:</p>
              <ol>
                <li>Takes less than 12 minutes.</li>
                <li>Answer honestly, even if you don’t like the answer.</li>
                <li>Try not to leave any “neutral” answers.</li>
              </ol>

            </div>


            <ProgressBar now={progressBarVal} label={`${progressBarVal}%`} />

            {/* Begin form  */}

            <form method="POST" action="" id="test-form">
              <div className="question-wrapper set1">
                <div className="statement">
                  Bạn thấy khó để giao tiếp với người khác
                </div>
                <div className="row answer">
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

              <div className="question-wrapper set1">
                <div className="statement">
                  Bạn rất hiếm khi chủ động bắt chuyện
                </div>
                <div className="row answer">
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

              <div className="question-wrapper set1">
                <div className="statement">
                  Bạn luôn gặp khó khăn trong việc tha thứ
                </div>
                <div className="row answer">
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


              <div className="row test-submit-wrapper">
                <div className="col-md-12">
                  <div className="submit_wrapper setnext">
                    <button className="btn btn-action" id="nextbut" type="button">
                      <span>NEXT&nbsp;</span><span className="fa fa-caret-right"></span></button>
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
