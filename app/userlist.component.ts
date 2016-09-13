import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {User} from "./user";

@Component({
    selector: 'user-list',
    templateUrl: 'app/userlist.component.html',
    styleUrls: ['app/userlist.component.css']
})
export class UserlistComponent implements OnInit {
    users:User[];

    ngOnInit():void {
        //this.http.get('http://localhost:8080/api/v1/getAllUserNameAndId').toPromise().then(response => response.json()  as User[]).then(users=>this.users = users);
        // this.http.get('http://localhost:8080/api/v1/getAllUserNameAndId').map(response => response.json()).subscribe(response=>this.users = response);
        console.info(this.users);
    }

    constructor(private http:Http) {

    }


}