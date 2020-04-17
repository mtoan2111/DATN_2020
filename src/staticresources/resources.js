const server = 'http://203.171.20.94:8801/';
// const server = 'https://localhost:5001/'
// const server = 'https://localhost:44385/'

const ApiUri = {
    login: server + 'api/v1/login/',
    statistic: server + 'api/v1/report/locker_statistical/',
    ping: {
        uri: server + 'api/v1/ping/',
        method: 'GET'
    },
    user: {
  
        getUser: {
            uri: server + 'api/v1/employee/get_employee/',
            method: 'GET',
        },
    
        getUsage: {
            uri: server + 'api/v1/employee/get_usage/',
            method: 'GET',
        },
        editUser: {
            uri: server + 'api/v1/employee/modify_employee/',
            method: 'PUT',
        },
        removeUser: {
            uri: server + 'api/v1/employee/remove_employee/',
            method: 'DELETE',
        },
        unmapPin: {
            uri: server + 'api/v1/employee/unmap_pin/',
            method: 'DELETE',
        },
        mapPin: {
            uri: server + 'api/v1/employee/map_pin/',
            method: 'PATCH',
        },
        unmapTag: {
            uri: server + 'api/v1/employee/unmap_tag/',
            method: 'DELETE',
        },
        mapTag: {
            uri: server + 'api/v1/employee/map_tag/',
            method: 'PATCH',
        },
        sendPin: {
            uri: server + 'api/v1/employee/send_pin/',
            method: 'POST',
        },
        unmapLocker: {
            uri: server + 'api/v1/emloyee/unmap_locker',
            method: 'DELETE',
        },
        mapNewLocker: {
            uri: server + 'api/v1/employee/map_new_locker',
            method: 'PATCH',
        },
      
    },
    controller: {

        getController: {
            uri: server + 'api/v1/controller/get_controller/',
            method: 'GET'
        },
     
    },
    department: {

        getDepartment: {
            uri: server + 'api/v1/department/get_department/',
            method: 'GET'
        },
        
    },
    building: {
     
        getBuilding: {
            uri: server + 'api/v1/building/get_building/',
            method: 'GET'
        },
  
    },
    level: {
      
        getLevel: {
            uri: server + 'api/v1/level/get_level/',
            method: 'GET'
        },
      
    },
    report: {
        statusReport: {
            uri: server + 'api/v1/report/locker_status/',
            method: 'GET'
        },
     
        eventReport: {
            uri: server + 'api/v1/report/locker_new_event/',
            method: 'GET'
        },
        historyReport: {
            uri: server + 'api/v1/report/locker_event/',
            method: 'GET'
        },
     
    },

    locker: {
        getLocker: {
            uri: server + 'api/v1/locker/get_locker/',
            method: 'GET'
        },
        getUsage: {
            uri: server + 'api/v1/locker/get_usage/',
            method: 'GET',
        },
        getManage: {
            uri: server + 'api/v1/locker/get_manage_locker/',
            method: 'GET',
        },
        getRestrict: {
            uri: server + 'api/v1/locker/get_restrict_locker/',
            method: 'GET',
        },
        openLocker: {
            uri: server + 'api/v1/locker/open_locker/',
            method: 'POST'
        },
        freeLocker: {
            uri: server + 'api/v1/locker/free_locker/',
            method: 'POST'
        },
        freeAllLocker: {
            uri: server + 'api/v1/locker/free_all_locker/',
            method: 'POST'
        },
        disableLocker: {
            uri: server + 'api/v1/locker/disable_locker/',
            method: 'POST'
        },
        enableLocker: {
            uri: server + 'api/v1/locker/enable_locker/',
            method: 'POST'
        },
        reportLocker: {
            uri: server + 'api/v1/locker/error_locker/',
            method: 'POST'
        },
        confirmLocker: {
            uri: server + 'api/v1/locker/confirm_open_locker/',
            method: 'POST'
        },
        createLayout: {
            uri: server + 'api/v1/locker/create_layout/',
            method: 'POST'
        },
        removeLocker: {
            uri: server + 'api/v1/locker/remove_locker/',
            method: 'DELETE'
        }
    },
    warning: {
        getWarning: {
            uri: server + 'api/v1/warning/get_warning/',
            method: 'GET'
        },
    },
    tag: {
        getTag: {
            uri: server + 'api/v1/tag/get_tag/',
            method: 'GET',
        },

        getFreeTag: {
            uri: server + 'api/v1/tag/get_free_tag/',
            method: 'GET',
        },

        getFreeAdminTag: {
            uri: server + 'api/v1/tag/get_free_adm_tag/',
            method: 'GET',
        },
    }
}

module.exports = {
    ApiUri, server
}