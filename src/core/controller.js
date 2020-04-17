import { ApiUri, server } from '../staticresources/resources'

class Controllers {

    getController = async (bId = 0, lId = 0, imei = '', mac = '', zone = '', page = 0) => {
        try {
            let url = ApiUri.controller.getController.uri;
            url += '?lId=' + lId;
            url += '&token=' + localStorage.getItem('crfs');
            url += '&bId=' + bId;
            url += '&imei=' + imei;
            url += '&mac=' + mac;
            url += '&zone=' + zone;
            url += '&page=' + page;

            return await fetch(url, {
                method: ApiUri.controller.getController.method,
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

var Controller = new Controllers();
export default Controller;