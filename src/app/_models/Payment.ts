export class InsertUser{
    "userId":string;
    "userName":string;
}

export class InsertPayment{
    "userId":string;
    "productId":string;
    "webName":string;
    "price": Int16Array;
    "amount": Int16Array;
}

export class PaymentDetail{
    "_id": string;
    "userId": string;
    "orderId": string;
    "webName": string;
    "price": Int16Array;
    "dateTime": Date;
}

export class UserDetail{
    "_id": string;
    "userId": string;
    "userName": string;
    "balance": Int16Array;
}