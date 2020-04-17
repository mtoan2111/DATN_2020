import React, { Fragment } from 'react'
import Home from './home'
import UserManagement from './usermanagement/usermanagement'
import TagManagement from './tagmanagement/tagmanagement'
import DepartmentManagement from './departmentmanagement/departmentmanagement'
import BuildingManagement from './buildingmanagement/buildingmanagement'
import ControllerManagement from './controllermanagement/controllermanagement'
import LevelManagement from './levelmanagement/levelmanagement'
import LockerStatusReport from './reportmanagement/lockerstatusrepost'
import LockerHistoryReport from './reportmanagement/lockerhistoryreport'
import LockerRealTimeReport from './reportmanagement/lockerrealtimereport'
import ManagerManagement from './managermanagement/managermanagement'
import RoleManagement from './rolemanagement/rolemangement'
import MapUserLockerManagement from './usingmanagement/mapuserlockermanagement'
import ManageUserLockerManagement from './usingmanagement/mangeuserlockermanagement'
import LockerManagement from './lockermanagement/lockermanagement'
import LockerLayoutManagement from './lockermanagement/lockerlayoutmanagement'
import WarningManagement from './warningmanagement/warningmanagement'

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: this.props.tag,
        }
    }

    componentDidMount() {

    }

    onNavigate = () => {
        switch (this.props.tag) {
            case 'home':
                return <Home />
            case 'userManage':
                return <UserManagement />
            case 'userTagManage':
                return <TagManagement />
            case 'depManage':
                return <DepartmentManagement />
            case 'buildingManage':
                return <BuildingManagement />
            case 'ctlManage':
                return <ControllerManagement />
            case 'levelManage':
                return <LevelManagement />
            case 'reportStatus':
                return <LockerStatusReport />
            case 'reportHistory':
                return <LockerHistoryReport />
            case 'reportRealtime':
                return <LockerRealTimeReport />
            case 'managerManage':
                return <ManagerManagement />
            case 'roleManage':
                return <RoleManagement />
            case 'mapLockerManage':
                return <MapUserLockerManagement />
            case 'userLockerManage':
                return <ManageUserLockerManagement />
            case 'lockerManage':
                return <LockerManagement />
            case 'layoutManage':
                return <LockerLayoutManagement />
            case 'warning':
                return <WarningManagement />

            default:
                return;
        };
    }


    render() {
        return (
            <Fragment>
                {this.onNavigate()}
            </Fragment>
        );
    }
}