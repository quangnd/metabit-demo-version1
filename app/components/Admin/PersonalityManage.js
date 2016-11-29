import React from 'react';
import SideBar from './SideBar';


class PersonalityManage extends React.Component {
    constructor() {
        super();

        this.state = {
            editorState: ''
        }

        this.handlerChange = this.handlerChange.bind(this);
    }

    handlerChange() {
        this.setState({
            editorState: 'abcxyz'
        })
    }
    render() {
        return (
            <div id="adminDashboard">
                <div className="navbar-default sidebar" role="navigation">
                    <SideBar />
                    <div id="page-wrapper">
                        {/* Main page begins from here */}
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">Personality editor page</h1>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalityManage;