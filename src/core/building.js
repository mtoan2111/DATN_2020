import { ApiUri, server } from '../staticresources/resources'

class Buildings {
    getBuilding = async (bId = 0, name = '', addr = '', page = 0) => {
        try {
            let url = ApiUri.building.getBuilding.uri;
            url += '?token=' + localStorage.getItem('crfs');
            url += '&name=' + name;
            url += '&addr=' + addr;
            url += '&bId=' + bId;
            url += '&page=' + page;

            return await fetch(url, {
                method: ApiUri.building.getBuilding.method,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                },
            })
                .then(response => response.json())
                .catch(console.error);
        }
        catch{ }
    }
}

var Building = new Buildings();
export default Building;