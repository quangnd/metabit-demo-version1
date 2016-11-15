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

       <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <ProgressBar now={progressBarVal} label={`${progressBarVal}%`} />
          </div>
        </div>
        {/* Begin form  */}

        <form>
          <div className="question-wrapper">
            <div className="statement">
              You find it difficult to introduce yourself to other people.
            </div>

            <div className="row answer">
              <div className="col-sm-3 caption left">
                Có
              </div>

                <div className="col-sm-6 btn-group options">
                
                    <label className="btn btn-default option testing max ">
                        <input type="radio" name="options" />
                    </label>
                    <label className="btn btn-default option agree med">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default option agree min">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default neutral option">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default disagree option min">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default disagree option med">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default disagree option max">
                        <input type="radio" name="options"/>
                    </label>
                </div>

              <div className="col-sm-3 caption right">
                Không
              </div>
              
            </div>
          </div>


<div className="question-wrapper">
            <div className="statement">
              You often get so lost in thoughts that you ignore or forget your surroundings.
            </div>

            <div className="row answer">
              <div className="col-sm-3 caption left">
                Có
              </div>

                <div className="col-sm-6 btn-group options">
                
                    <label className="btn btn-default option testing max ">
                        <input type="radio" name="options" />
                    </label>
                    <label className="btn btn-default option agree med">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default option agree min">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default neutral option">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default disagree option min">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default disagree option med">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default disagree option max">
                        <input type="radio" name="options"/>
                    </label>
                </div>

              <div className="col-sm-3 caption right">
                Không
              </div>
              
            </div>
          </div>


          <div className="question-wrapper">
            <div className="statement">
              You try to respond to your e-mails as soon as possible and cannot stand a messy 
            </div>

            <div className="row answer">
              <div className="col-sm-3 caption left">
                Có
              </div>

                <div className="col-sm-6 btn-group options">
                
                    <label className="btn btn-default option testing max ">
                        <input type="radio" name="options" />
                    </label>
                    <label className="btn btn-default option agree med">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default option agree min">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default neutral option">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default disagree option min">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default disagree option med">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default disagree option max">
                        <input type="radio" name="options"/>
                    </label>
                </div>

              <div className="col-sm-3 caption right">
                Không
              </div>
              
            </div>
          </div>


          <div className="question-wrapper">
            <div className="statement">
              You find it easy to stay relaxed and focused even when there is some pressure.
            </div>

            <div className="row answer">
              <div className="col-sm-3 caption left">
                Có
              </div>

                <div className="col-sm-6 btn-group options">
                
                    <label className="btn btn-default option testing max ">
                        <input type="radio" name="options" />
                    </label>
                    <label className="btn btn-default option agree med">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default option agree min">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default neutral option">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default disagree option min">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default disagree option med">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default disagree option max">
                        <input type="radio" name="options"/>
                    </label>
                </div>

              <div className="col-sm-3 caption right">
                Không
              </div>
              
            </div>
          </div>


          <div className="question-wrapper">
            <div className="statement">
              You do not usually initiate conversations.
            </div>

            <div className="row answer">
              <div className="col-sm-3 caption left">
                Có
              </div>

                <div className="col-sm-6 btn-group options">
                
                    <label className="btn btn-default option testing max ">
                        <input type="radio" name="options" />
                    </label>
                    <label className="btn btn-default option agree med">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default option agree min">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default neutral option">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default disagree option min">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default disagree option med">
                        <input type="radio" name="options"/>
                    </label>
                    <label className="btn btn-default disagree option max">
                        <input type="radio" name="options"/>
                    </label>
                </div>

              <div className="col-sm-3 caption right">
                Không
              </div>
              
            </div>
          </div>

           <div className="row test-submit-wrapper">
                    <div className="col-sm-offset-5 col-sm-2">
                        <div className="submit_wrapper setnext">

                            <LinkContainer to={{ pathname: '/result' }}>
                                <button className="btn btn-action center-block" id="nextbut" type="button"><span>Tiếp Theo&nbsp;</span></button>
                            </LinkContainer>

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
