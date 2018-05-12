import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import {  Customer , Product , ProductReview } from '../_models/index';


@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Product[]>(appConfig.apiProduct);
    }

    getAllReview() {
        return this.http.get<ProductReview[]>(appConfig.apiProduceReview);
    }

    getPaymentDetail(id:string){
        return this.http.get(appConfig.apiPayment + 'payment/' +id);
    }

    addBalance(id:string , amount:string){
        return this.http.get(appConfig.apiPayment + 'balance/' +id + '/increase/' + amount);
    }

    newPayment(data:string){
        return this.http.post(appConfig.apiPayment + 'payment/new' , data);
    }
    

    getUserDetail(id:string){
        return this.http.get(appConfig.apiPayment + 'user/' + id);
    }


    create(user: Customer) {
        return this.http.post(appConfig.apiCustomer , user);
    }


    delete(_id: string) {
        return this.http.delete(appConfig.apiUrl + '/users/' + _id);
    }
}