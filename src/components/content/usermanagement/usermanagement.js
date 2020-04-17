import React, { Fragment } from 'react';
import User from '../../../core/user'
import MaterialTable from 'material-table'
import TableIcons from '../../common/materialicon'
import Input from '../../common/input'
import Button from '../../common/button'
import Department from '../../../core/department'

export default class UserManagement extends React.Component {
    NameInput = '';
    columns = [
        { title: 'Họ và tên', field: 'name' },
        { title: 'ID nhân sụ', field: 'eCode' },
        { title: 'Email', field: 'email' },
    ]

    options = {
        search: false,
        showTitle: false,
        pageSize: 20,
        pageSizeOptions: [20],
    }

    constructor(props) {
        super(props);
        this.state = {
        };
        this.tableRef = React.createRef();
        this.modalRef = React.createRef();
    }

    componentDidMount() {
        Department.getDepartment()
            .then(value => {
                console.log(value);
            })
    }

    getDataFromServer = (query) => {
        return new Promise((resolve, reject) => {
            User.getUser(0, this.NameInput, '', '', '', 0, 0, 0, query.page + 1)
                .then(value => {
                    resolve({
                        data: value.items,
                        page: value.currentPage - 1,
                        totalCount: value.total,
                    })
                })
        })
    }

    onNameChange = (value) => {
        this.NameInput = value;
    }

    onSearchClick = () => {
        this.tableRef.current && this.tableRef.current.onQueryChange();
        // if (typeof this.tableRef.current !== 'undefined'){
        //     this.tableRef.current.onQueryChange();
        // }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <Input title={'Tên nhân viên'}
                        onChange={this.onNameChange} />
                </div>
                <div>
                    <Button title={'Tên nhân viên'}
                        onClick={this.onSearchClick} />
                </div>
                <div style={{ maxWidth: '100%' }}>
                    <MaterialTable
                        tableRef={this.tableRef}
                        options={this.options}
                        icons={TableIcons}
                        columns={this.columns}
                        data={this.getDataFromServer}
                        title="Demo Title"
                    />
                </div>
            </Fragment>
        )
    }
}
