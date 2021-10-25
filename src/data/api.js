import axios from "axios";

/*
 * This endpoint only lasts for eight hours.
 */

export class ApiService {
    baseRoute = `http://localhost:8080`;

    _instance;
    
    constructor() {
        this.api = axios.create({
            baseURL: this.baseRoute,
            headers: {                  
                "Access-Control-Allow-Origin": "*" ,
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Headers": "DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range",         
            },
        });
    }

    /**
     * @returns {ApiService}
     */
    static getInstance() {
        if(!this._instance) this._instance = new ApiService();
        return this._instance;
    }   

    async getAll() {
        let response = await this.api.get("/").then((response) => response)
        return response.status != 200 ? null : response.data;
    }

    async addEmploye(body) {
        let response = await this.api.post("/", body).then((response) => response);
        return !response.data ? null : response.data;
    }

    async deleteEmployee(id) {
        let response = await this.api.delete(`/${id}`).then((response) => response);
        debugger;
        return !response.data ? null : response.data;
    }

}