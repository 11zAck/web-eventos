export interface IRequestPayment {
    amount: string;
    sessionId: string;
    buyOrder: string;
}

export interface IResponsePayment {
    token: string;
    url: string;
}

export class ResponsePayment implements IResponsePayment {
    token: string;
    url: string;
}

export class RequestPayment implements IRequestPayment {
    amount: string;
    sessionId: string;
    buyOrder: string;

    constructor( amount: string, sessionId: string, buyOrder: string ){
        this.amount = amount;
        this.sessionId = sessionId;
        this.buyOrder = buyOrder;
    }
}
