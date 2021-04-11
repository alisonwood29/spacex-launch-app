import axios from 'axios';


export const getAllLaunches = async () => {
const url = 'https://api.spacexdata.com/v3/launches';

return await axios.get(url).then(response => response.data);
}
