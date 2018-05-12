import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { appConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.get<any>(appConfig.apiCustomer)
            .map(user => {         
                if (user) {
                    for (var key in user){
                        if( (user[key]["name"] == username) && (user[key]["password"] == password) ){
                            localStorage.setItem('currentUser', JSON.stringify(user[key]));
                        }
                    }
                }

                return true;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}