import React from 'react';
import SideBar from './SideBar';
import {Editor, EditorState} from 'draft-js';

class PersonalityManage extends React.Component {
    constructor() {
        super();

        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
    }

    render() {          
        const {editorState} = this.state;
        return (
            <div id="adminDashboard">
                <div className="navbar-default sidebar" role="navigation">
                    <SideBar />
                    <div id="page-wrapper">
                        {/* Main page begins from here */}
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">Personality editor page</h1>

                                <div style={styles.editor} >
                                 <Editor editorState={editorState} onChange={this.onChange} />;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

 const styles = {
        root: {
          fontFamily: '\'Helvetica\', sans-serif',
          padding: 20,
          width: 600,
        },
        editor: {
          border: '1px solid #ccc',
          cursor: 'text',
          minHeight: 80,
          padding: 10,
        },
        button: {
          marginTop: 10,
          textAlign: 'center',
        },
      };
      
export default PersonalityManage;