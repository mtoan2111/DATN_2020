import { ApiUri, server } from '../staticresources/resources'

class Controllers {
    getLevel = async (bId = 0, page = 0) => {
        try {
            let url = ApiUri.level.getLevel.uri;
            url += '?bId=' + bId;
            url += '&token=' + localStorage.getItem('crfs');
            url += '&page=' + page;

            return await fetch(url, {
                method: ApiUri.level.getLevel.method,
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