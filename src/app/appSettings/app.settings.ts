import { Injectable } from "@angular/core";

@Injectable()
export class AppSettings {

    // public static get BASE_URL() : string {return 'https://sheltered-atoll-29861.herokuapp.com/api/'};
    public static get BASE_URL() : string {return 'http://localhost:3000/student/'};

    public static get LOGIN() : string { return 'login'};
  
    public static get SEND_MAIL() : string { return 'forgot_password_mail'};

    public static get UPDATE() : string { return 'update'};

    public static get RESET_PASSWORD() : string { return 'check_reset_password'};
    
    // public static get GET_AREA() : string { return 'getarea1'};
}
