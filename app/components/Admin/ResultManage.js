import React from 'react';
import SideBar from './SideBar';

class ResultManage extends React.Component {
    render() {
        return (
            <div id="adminDashboard">
                <div className="navbar-default sidebar" role="navigation">
                    <SideBar />
                    <div id="page-wrapper">
                        {/* Main page begins from here */}
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">Result page</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultManage;