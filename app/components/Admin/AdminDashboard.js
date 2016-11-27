import React from 'react';
import SideBar from './SideBar';

class AdminDashboard extends React.Component {
  render() {
    return (
      <div id="adminDashboard">
        <div className="navbar-default sidebar" role="navigation">
          <SideBar/>
          <div id="page-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">Dashboard</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 paddingR">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-comments fa-5x"></i>
                      </div>
                      <div className="col-xs-9 text-right paddingR">
                        <div className="huge">03</div>
                        <div>Surveys!</div>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div className="panel-footer">
                      <span className="pull-left">View Details</span>
                      <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                      <div className="clearfix"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 paddingR">
                <div className="panel panel-green">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-tasks fa-5x"></i>
                      </div>
                      <div className="col-xs-9 text-right paddingR">
                        <div className="huge">60</div>
                        <div>Questions/S</div>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div className="panel-footer">
                      <span className="pull-left">View Details</span>
                      <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                      <div className="clearfix"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 paddingR">
                <div className="panel panel-yellow">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-shopping-cart fa-5x"></i>
                      </div>
                      <div className="col-xs-9 text-right paddingR">
                        <div className="huge">1024</div>
                        <div>People voted!</div>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div className="panel-footer">
                      <span className="pull-left">View Details</span>
                      <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                      <div className="clearfix"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 paddingR">
                <div className="panel panel-red">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-support fa-5x"></i>
                      </div>
                      <div className="col-xs-9 text-right paddingR">
                        <div className="huge">101</div>
                        <div>Feedbacks</div>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div className="panel-footer">
                      <span className="pull-left">View Details</span>
                      <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                      <div className="clearfix"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default AdminDashboard;