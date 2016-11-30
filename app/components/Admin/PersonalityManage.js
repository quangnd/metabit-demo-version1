import React from 'react';
import SideBar from './SideBar';
import { Editor, EditorState, RichUtils } from 'draft-js';

class PersonalityManage extends React.Component {
    constructor() {
        super();

        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }

    handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
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
                                    <button onClick={this._onBoldClick.bind(this)}>Bold</button>
                                    <Editor editorState={editorState}
                                        onChange={this.onChange}
                                        handleKeyCommand={this.handleKeyCommand}
                                        />
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