import { ApiService } from "../services/Apiservices";

class Users {
    public getUsers = async () => {
        try {
            const apiResponse = await ApiService.get("/api/auth/users");
            return Promise.resolve(apiResponse.data.data);
          } catch (error: any) {
            console.error("Error at Login \n", error.response.data);
            return  Promise.reject(error.response.data.message);
          }
    }
    public getWaitlist = async () => {
        try {
            const apiResponse = await ApiService.get("/api/waitlist");
            return Promise.resolve(apiResponse.data.data);
          } catch (error: any) {
            console.error("Error at Login \n", error.response.data);
            return  Promise.reject(error.response.data.message);
          }
    }
    public getNewsletter = async () => {
        try {
            const apiResponse = await ApiService.get("/api/newsletter");
            return Promise.resolve(apiResponse.data.data);
          } catch (error: any) {
            console.error("Error at Login \n", error.response.data);
            return  Promise.reject(error.response.data.message);
          }
    }

};
const users = new Users();
export default users ;
