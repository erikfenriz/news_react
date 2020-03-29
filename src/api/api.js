import axios from 'axios';

export default axios.create({
    baseURL: "https://storage.googleapis.com/aller-structure-task/test_data.json",
});
