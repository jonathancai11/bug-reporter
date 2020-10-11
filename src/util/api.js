import axios from 'axios';


const baseURL = process.env.BASE_API_URL || "http://bug.jonathancai.com";

export function getAllReports() {
    return axios.get(baseURL + "/api/v1/report/all");
}
