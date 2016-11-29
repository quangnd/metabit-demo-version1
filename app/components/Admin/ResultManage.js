import React from 'react';
import SideBar from './SideBar';
var FixedDataTable = require('fixed-data-table');
const {Table, Column, Cell} = FixedDataTable;

class ResultManage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myTableData: [
                { name: 'Rylan', age: '3', gender: 'male' },
                { name: 'Amelia', age: '12', gender: 'male' },
                { name: 'Estevan', age: '9', gender: 'female' },
                { name: 'Florence', age: '22', gender: 'male' },
                { name: 'Tressa' , age: '18', gender: 'female'},
            ],
        };
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
                                <h1 className="page-header">Result page</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <Table
                                    rowsCount={this.state.myTableData.length}
                                    rowHeight={50}
                                    headerHeight={50}
                                    width={700}
                                    height={300}>
                                    <Column
                                        header={<Cell>Name</Cell>}
                                        cell={props => (
                                            <Cell {...props}>
                                                {this.state.myTableData[props.rowIndex].name}
                                            </Cell>
                                        )}
                                        width={150}
                                        />
                                    <Column
                                        header={<Cell>Age</Cell>}
                                        cell={props => (
                                            <Cell {...props}>
                                                {this.state.myTableData[props.rowIndex].age}
                                            </Cell>
                                        )}
                                        width={70}
                                        />
                                      <Column
                                        header={<Cell>Gender</Cell>}
                                        cell={props => (
                                            <Cell {...props}>
                                                {this.state.myTableData[props.rowIndex].gender}
                                            </Cell>
                                        )}
                                        width={70}
                                        />
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultManage;