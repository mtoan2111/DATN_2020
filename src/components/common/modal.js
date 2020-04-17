import React from 'react'
import CreateUser from '../content/usermanagement/createuser'
import Logo from '../../imgs/logo.png'
import UnmapPINCodeConfirm from '../content/tagmanagement/unmappinconfirm'
import MapPINCodeConfirm from '../content/tagmanagement/mappinconfirm'
import SendPINCodeConfirm from '../content/tagmanagement/sendpinconfirm'
import UnmapTagConfirm from '../content/tagmanagement/unmaptagconfirm'
import CreateDepartment from '../content/departmentmanagement/createdepartment'
import CreateBuilding from '../content/buildingmanagement/createbuilding'
import ModifyController from '../content/controllermanagement/modifycontroller'
import CreateController from '../content/controllermanagement/createcontroller'
import CreateLevel from '../content/levelmanagement/createlevel'
import CreateManager from '../content/managermanagement/createmanager'
import ModifyPermissionConfirm from '../content/rolemanagement/modifypermissionconfirm'
import CreateRole from '../content/rolemanagement/createrole'
import MapUserLockerConfirm from '../content/usingmanagement/mapuserlockerconfirm'
import OpenLockerConfirm from '../content/lockermanagement/openlockerconfirm'
import FreeLockerConfirm from '../content/lockermanagement/freelockerconfirm'
import DisableLockerConfirm from '../content/lockermanagement/disablelockerconfirm'
import EnableLockerConfirm from '../content/lockermanagement/enablelockerconfirm'
import EmailLockerConfirm from '../content/lockermanagement/emaillockerconfirm'
import ReportLockerConfirm from '../content/lockermanagement/reportlockerconfrim'
import FreeAllLockerConfirm from '../content/lockermanagement/freealllockerconfirm'
import CreateLocker from '../content/lockermanagement/createlocker'
import RemoveLockerConfirm from '../content/lockermanagement/removelockerconfirm'
import ModifyTag from '../content/tagmanagement/modifytag'
import ModifyManager from '../content/managermanagement/modifymanager'
import UnmapRoleManagerConfirm from '../content/managermanagement/unmaprolemanagerconfirm'
import ExportUser from '../content/usermanagement/exportuser'
import ExportController from '../content/controllermanagement/exportcontroller'
import ExportLockerStatus from '../content/reportmanagement/exportlockerstatus'
import ExportLockerHistory from '../content/reportmanagement/exportlockerhistory'
import ExportMapLocker from '../content/usingmanagement/exportmaplocker'
import MapExistLocker from '../content/usingmanagement/mapexisteduserlocker'
import MapExistedUserLockerConfirm from '../content/usingmanagement/mapexisteduserlockerconfirm'

export default class Modal extends React.Component {
    display = 'none';
    opacity = 0;
    isShow = false;
    data = null;
    constructor(props) {
        super(props);
        this.state = {
            isRerender: false,
            display: 'none',
            opacity: 0,
            data: null,
        }
        this.exportUserRef = React.createRef();
        this.exportControlerRef = React.createRef();
        this.exportLockerStatusRef = React.createRef();
        this.exportLockerHistoryRef = React.createRef();
        this.exporMapUserRef = React.createRef();
    }

    onCancelButtonClick = () => {
        setTimeout(() => {
            this.setState({
                display: 'none',
                width: 300,
            })
        }, 200);

        this.setState({
            opacity: 0,
        })
    }

    onModalShow = (data) => {
        console.log(data);
        this.data = data;
        this.setState({
            display: 'flex',
        });
        setTimeout(() => {
            this.setState({
                opacity: 1,
            });
        }, 50);
    }

    onChangeStatus = (type, code, res) => {
        switch (type) {
            case 'exportUser':
                this.exportUserRef.current && this.exportUserRef.current.onChangeStatus(code, res);
                break;
            case 'exportController':
                this.exportControlerRef.current && this.exportControlerRef.current.onChangeStatus(code, res);
                break;
            case 'exportStatus':
                this.exportLockerStatusRef.current && this.exportLockerStatusRef.current.onChangeStatus(code, res);
                break;
            case 'exportHistory':
                this.exportLockerHistoryRef.current && this.exportLockerHistoryRef.current.onChangeStatus(code, res);
                break;
            case 'exportMapLocker':
                this.exporMapUserRef.current && this.exporMapUserRef.current.onChangeStatus(code, res);
                break;
            default:
                break;
        }
    }

    renderContent = () => {
        switch (this.props.type) {
            case 'user':
                return <CreateUser onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'unmapPin':
                return <UnmapPINCodeConfirm onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'mapPin':
                return <MapPINCodeConfirm onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'sendPin':
                return <SendPINCodeConfirm onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'unmapTag':
                return <UnmapTagConfirm onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'department':
                return <CreateDepartment onCancelClick={this.onCancelButtonClick} />
            case 'building':
                return <CreateBuilding onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'modifyController':
                return <ModifyController onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'createController':
                return <CreateController onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'level':
                return <CreateLevel onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'createManager':
                return <CreateManager onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'modifyPermission':
                return <ModifyPermissionConfirm onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'createRole':
                return <CreateRole onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'mapUserLocker':
                return <MapUserLockerConfirm onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'openLocker':
                return <OpenLockerConfirm onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'freeLocker':
                return <FreeLockerConfirm onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'disableLocker':
                return <DisableLockerConfirm onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'enableLocker':
                return <EnableLockerConfirm onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'confirmLocker':
                return <EmailLockerConfirm onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'reportLocker':
                return <ReportLockerConfirm onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'freeAllLocker':
                return <FreeAllLockerConfirm onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'createLocker':
                return <CreateLocker onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'removeLocker':
                return <RemoveLockerConfirm onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'modifyTag':
                return <ModifyTag onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'modifyManager':
                return <ModifyManager onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'unmapRole':
                return <UnmapRoleManagerConfirm onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'exportUser':
                return <ExportUser ref={this.exportUserRef} onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'exportController':
                return <ExportController ref={this.exportControlerRef} onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'exportStatus':
                return <ExportLockerStatus ref={this.exportLockerStatusRef} onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'exportHistory':
                return <ExportLockerHistory ref={this.exportLockerHistoryRef} onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'exportMapLocker':
                return <ExportMapLocker ref={this.exporMapUserRef} onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'mapExistedLocker':
                return <MapExistLocker ref={this.exporMapUserRef} onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            case 'mapExistedUserLockerConfirm':
                return <MapExistedUserLockerConfirm ref={this.exporMapUserRef} onCancelClick={this.onCancelButtonClick}
                    data={this.data} />
            default:
                break;
        }
    }

    render() {
        let mainContainer = {
            display: this.state.display,
            width: '100%',
            height: '95%',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            zIndex: 15,
            opacity: this.state.opacity,
            transition: 'opacity .2s'
        };

        let mainSubContainer = {
            display: this.state.display,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
        };

        let mainContent = {
            display: 'flex',
            flexDirection: 'column',
            width: this.props.type === 'mapExistedLocker' ? '50%' : 300,
            // height: this.props.type === 'mapExistedLocker' ? '90%' : 'auto',
            maxHeight: '90%',
            backgroundColor: 'white',
            border: '.1vh solid red',
            borderRadius: '1vh',
            WebkitBoxShadow: '0.2vh .2vh .5vh 0vh rgba(0,0,0,0.75)',
            MozBoxShadow: '.2vh .2vh .5vh 0vh rgba(0,0,0,0.75)',
            boxShadow: '.2vh .2vh .5vh 0 rgba(0,0,0,0.75)',
            padding: '10px 20px 0px 20px',
            position: 'relative',
            transition: 'max-height .5s'
        };

        return (
            <div style={mainContainer}>
                <div style={mainSubContainer}>
                    <div style={styles.mainBlurBackground}>
                    </div>
                    <div style={mainContent}>
                        <div style={styles.logoContainer}>
                            <img src={Logo} style={{ width: '100%', height: '100%' }} alt='' />
                        </div>
                        <div style={styles.logoSub}>
                        </div>
                        {this.renderContent()}
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    logoContainer: {
        position: 'absolute',
        width: 106,
        height: 39,
        top: -28,
        display: 'flex',
        justifyContent: 'center',
        left: 13,
        zIndex: 3,
    },

    logoSub: {
        position: 'absolute',
        width: 97,
        height: 2,
        backgroundColor: 'white',
        zIndex: 1,
        top: -1,
    },

    mainSubContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    mainBlurBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc',
        zIndex: -3,
        opacity: .7
    },

    mainHeader: {
        fontSize: '3vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30
    },

    mainForm: {
        marginTop: 15,
        flex: 1
    },

    mainFooter: {
        marginTop: 70,
        height: 70,
        borderTop: '1px solid red',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}