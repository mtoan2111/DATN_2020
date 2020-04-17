import { ApiUri, server } from '../staticresources/resources'

class Departments {
    getDepartment = async (dId = 0, name = '', page = 0) => {
        try {
            let url = ApiUri.department.getDepartment.uri;
            url += '?name=' + name;
            url += '&token=' + localStorage.getItem('crfs');
            url += '&dId=' + dId;
            url += '&page=' + page;

            return await fetch(url, {
                method: ApiUri.department.getDepartment.method,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => response.json())
                .catch(console.error);
        }
        catch{ }
    }

}

var Department = new Departments();
export default Department;