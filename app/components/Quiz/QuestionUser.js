import React from 'react';
import { ProgressBar, Radio, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FieldGroup from '../common/FieldGroup';

class QuestionUser extends React.Component {


    render() {

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
                        <p className="text-center">Please fill in the following information</p>
                    </div>
                </div>


                <div className="row user-prompt">
                    <form>

                        <div className="form-group">
                            <label className="col-sm-3 col-sm-offset-2 control-label" for="textinput">Bạn tên là gì?</label>
                            <div className="col-sm-4 padding-me">
                                <input id="textinput" name="textinput" type="text" placeholder="Ex: Nguyễn Văn A" className="form-control input-sm" />
                            </div>
                        </div>


                        <div className="form-group">
                            <label className="col-sm-3 col-sm-offset-2 control-label" for="radios">Bạn là Nam hay Nữ</label>
                            <div className="col-sm-4">
                                <div className="radio">
                                    <label for="radios-0">
                                        <input type="radio" name="sex" id="radios-0" value="1" />
                                        Nam
                                    </label>
                                </div>
                                <div className="radio">
                                    <label for="radios-1">
                                        <input type="radio" name="sex" id="radios-1" value="2" />
                                        Nữ
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className="form-group">
                            <label className="col-sm-3 col-sm-offset-2 control-label" for="checkboxes">Môn học bạn thích nhất là gì?</label>
                            <div className="col-sm-4">
                                <div className="checkbox">
                                    <label for="checkboxes-0">
                                        <input type="checkbox" name="checkboxes" id="checkboxes-0" value="1" />
                                        Toán
                </label>
                                </div>
                                <div className="checkbox">
                                    <label for="checkboxes-1">
                                        <input type="checkbox" name="checkboxes" id="checkboxes-1" value="2" />
                                        Văn
                </label>
                                </div>
                                <div className="checkbox">
                                    <label for="checkboxes-2">
                                        <input type="checkbox" name="checkboxes" id="checkboxes-2" value="" />
                                        Anh
                </label>
                                </div>
                            </div>
                        </div>


                        <div className="form-group">
                            <label className="col-sm-3 col-sm-offset-2 control-label" for="checkboxes">Môn học nào bạn thường được điểm cao nhất</label>
                            <div className="col-sm-4">
                                <div className="checkbox">
                                    <label for="checkboxes-0">
                                        <input type="checkbox" name="checkboxes" id="checkboxes-0" value="1" />
                                        Toán
                </label>
                                </div>
                                <div className="checkbox">
                                    <label for="checkboxes-1">
                                        <input type="checkbox" name="checkboxes" id="checkboxes-1" value="2" />
                                        Văn
                </label>
                                </div>
                                <div className="checkbox">
                                    <label for="checkboxes-2">
                                        <input type="checkbox" name="checkboxes" id="checkboxes-2" value="" />
                                        Anh
                </label>
                                </div>
                            </div>
                        </div>


                        <div className="form-group">
                            <label className="col-sm-3 col-sm-offset-2 control-label" for="checkboxes">Bạn thường thích tham gia nhóm sở thích nào</label>
                            <div className="col-sm-4">
                                <div className="checkbox">
                                    <label for="checkboxes-0">
                                        <input type="checkbox" name="checkboxes" id="checkboxes-0" value="1" />
                                        Chơi thể thao
                </label>
                                </div>
                                <div className="checkbox">
                                    <label for="checkboxes-1">
                                        <input type="checkbox" name="checkboxes" id="checkboxes-1" value="2" />
                                        Chơi nhạc cụ âm nhạc
                </label>
                                </div>
                                <div className="checkbox">
                                    <label for="checkboxes-2">
                                        <input type="checkbox" name="checkboxes" id="checkboxes-2" value="" />
                                        Chơi game máy tính
                </label>
                                </div>
                            </div>
                        </div>


                    </form>
                </div>



                <div className="row test-submit-wrapper">
                    <div className="col-sm-offset-5 col-sm-2">
                        <div className="submit_wrapper setnext">

                            <LinkContainer to={{ pathname: '/questions' }}>
                                <button className="btn btn-action center-block" id="nextbut" type="button"><span>Bắt Đầu&nbsp;</span></button>
                            </LinkContainer>

                        </div>

                    </div>
                </div>


                {/* End form  */}

            </div>



        );
    }
}

export default QuestionUser;
