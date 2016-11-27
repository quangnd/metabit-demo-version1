import React from 'react';
import { Link } from 'react-router';
class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar-nav navbar-collapse">
                <ul className="nav metismenu" id="side-menu" >
                    <li>
                        <a href="/admin/dashboard"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                    </li>
                    <li>
                        <a href="/admin/questionManage"><i className="fa fa-table fa-fw"></i> Questions</a>
                    </li>
                    <li>
                        <a href="forms.html"><i className="fa fa-edit fa-fw"></i> View Results</a>
                    </li>
                    <li id="multiLevel1">
                        <a href="#">
                            <i className="fa fa-bar-chart-o fa-fw"></i> Charts
                             <span className="fa arrow"></span>
                        </a>
                        <ul className="nav nav-second-level">
                            <li>
                                <a href="flot.html">Flot Charts</a>
                            </li>
                            <li>
                                <a href="morris.html">Morris.js Charts</a>
                            </li>
                        </ul>

                    </li>
                    {/*
                 <li id="multiLevel2">
                <a href="#"><i className="fa fa-wrench fa-fw"></i> Demo multilevel<span className="fa arrow"></span></a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="panels-wells.html">Panels and Wells</a>
                  </li>
                  <li>
                    <a href="buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="notifications.html">Notifications</a>
                  </li>
                  <li>
                    <a href="typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="icons.html"> Icons</a>
                  </li>
                  <li>
                    <a href="grid.html">Grid</a>
                  </li>
                </ul>

              </li>
              */}

                    {/*
                        <li>
                            <a href="#"><i className="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Third Level <span className="fa arrow"></span></a>
                                    <ul className="nav nav-third-level">
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                    </ul>
                               
                                </li>
                            </ul>
                            
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-files-o fa-fw"></i> Sample Pages<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="blank.html">Blank Page</a>
                                </li>
                                <li>
                                    <a href="login.html">Login Page</a>
                                </li>
                            </ul>
                      
                        </li>
                        */}
                </ul>
            </div>
        )
    }
}

export default SideBar;