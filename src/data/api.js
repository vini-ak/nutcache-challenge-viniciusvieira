import axios from "axios";

/*
 * This endpoint only lasts for eight hours.
 */
ENDPOINT = '44524eab4db343e4b4b2edf25e088336';

export class ApiService {
    baseRoute = `https://crudcrud.com/api${ENDPOINT}`;
    
    constructor() {
        this.api = axios.create({
            baseURL: baseRoute
        });
    }
    
    async getAll() {
        let response = await this.api.get("/nutemployee").then((response) => response);
        return !response.data ? null : response.data;
    }

}