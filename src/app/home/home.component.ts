import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model: any = {};

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {
    this.model.user = JSON.parse(localStorage.getItem('currentUser'));
    this.model.userId = this.model.user["id"];
    
    
  }

  ngOnInit() {
    

    this.userService.getAll()
      .subscribe( data =>{
        this.model.product = data;
    });

    this.userService.getAllReview()
      .subscribe( data =>{
      this.model.productReview = data;
    });
    
  }
 
    clickProduct(id) {
        document.getElementById("all").style.visibility = "hidden";
        document.getElementById("all2").style.visibility = "visible";

        this.model.productReviewOne = new Array();
        // this.model.productReviewOne = this.model.productReview[0];
        for (var key in this.model.product) {
          if (this.model.product[key]['productID'] == id) {
            this.model.productOne = this.model.product[key];
          }
        }
        for (var key in this.model.productReview) {
          if (this.model.productReview[key]['productID'] == id) {
            this.model.productReviewOne.push(this.model.productReview[key]);
          }
        }


    }


    back(value){
      if(value == "all2"){
        document.getElementById("all").style.visibility = "visible";
        document.getElementById("all2").style.visibility = "hidden";
        document.getElementById("all3").style.visibility = "hidden";
      }
      if(value == "all3"){
        document.getElementById("all").style.visibility = "hidden";
        document.getElementById("all2").style.visibility = "visible";
        document.getElementById("all3").style.visibility = "hidden";
      }
      if(value =="detail"){
        this.model.productSelect = this.model.productOne;
        
        

        this.userService.getPaymentDetail(this.model.userId)
          .subscribe(data=>{
            this.model.paymentDetail = data;
          })
        this.userService.getUserDetail(this.model.userId)
          .subscribe(data=>{
            this.model.userDetail = data;
          });
        document.getElementById("all").style.visibility = "hidden";
        document.getElementById("all2").style.visibility = "hidden";
        document.getElementById("all3").style.visibility = "visible";
      }
      if (value == "main"){
        document.getElementById("all").style.visibility = "visible";
        document.getElementById("all2").style.visibility = "hidden";
        document.getElementById("all3").style.visibility = "hidden";
      }
    }
    
    addBalance(){
      this.userService.addBalance(this.model.userId , this.model.balance)
        .subscribe(data=>{
          
      });
    }

    newPayment(){
      this.model.checkout = {
        "userId":this.model.userId,
        "productId":this.model.productSelect['productID'],
        "webName":"ขายของออนไลน์",
        "price": this.model.productSelect['price'],
        "amount": this.model.productSelect['price']
      };
      this.userService.newPayment(this.model.checkout)
        .subscribe(data=>{

        })
    }
  
  
  

}
