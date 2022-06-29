declare namespace Express {
  export interface Request {
    userId: string;
    userType: number;
    userPremium: boolean;
    userfirtsName: string;
    userLastname: string;
  }
}
