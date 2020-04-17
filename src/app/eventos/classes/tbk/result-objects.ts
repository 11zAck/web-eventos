export interface CardDetail {
    cardNumber: string;
    cardExpirationDate: Date;
}

export interface DetailOutput {
    sharesAmount: string;
    sharesNumber: number;
    amount: number;
    commerceCode: string;
    buyOrder: string;
    authorizationCode: string;
    paymentTypeCode: string;
    responseCode: number;
}

export interface ResultData {
    accountingDate: string;
    buyOrder: string;
    cardDetail: CardDetail;
    detailOutput: DetailOutput[];
    sessionId: string;
    transactionDate: string;
    urlRedirection: string;
    vci: string;
}
