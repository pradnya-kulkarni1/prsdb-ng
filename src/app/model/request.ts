import { User } from "./user";


export class Request{
    id: number;
    user:User;
    description: string;
    justification: string;
    dateNeeded: Date;
    deliveryMode: string;
    status: string;
    total: number;
    submitteddate: Date;
    reasonForRejection: string;
    

    constructor(id:number=0, user=new User(), description='',justification = '',
    dateNeeded = new Date(),deliveryMode ='', status = ' ', total = 0, submitteddate = new Date(),
     reasonForRejection = ''){
            this.id = id;
            this.user = user;
            this.description = description;
            this.justification = justification;;
            this.dateNeeded = dateNeeded;
            this.deliveryMode = deliveryMode;
            this.status = status;
            this.total = total;
            this.submitteddate = submitteddate;
            this.reasonForRejection = reasonForRejection;
            
        }
    


}