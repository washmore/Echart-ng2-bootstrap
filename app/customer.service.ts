import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {CustomerPublic} from "./customer.public";
@Injectable()
export class CustomerService {

    private getCustomerPublicDailyUrl = "http://10.8.204.107:8080/api/getCustomerPublicDaily.cross";

    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    constructor(private  http:Http) {

    }

    getCustomerPublicDaily():Promise<CustomerPublic[]> {

        return this.http.get(this.getCustomerPublicDailyUrl)
            .toPromise()
            .then(response => response.json() as CustomerPublic[])
            .catch(this.handleError);

    }

}