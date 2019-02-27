import {Http}from '@angular/http';
import 'rxjs/add/operator/toPromise'; // to use promise
import {Injectable} from '@angular/core'
@Injectable()
export class WebService {

    BASE_URL="https://localhost:44336/api/";
 // ctor to iniliza http paramter
    constructor( private http : Http)  {} 
    // fun to get data
    getMessages(){
        return this.http.get(this.BASE_URL+"messages").toPromise();
    }

    // fun to post data
    postMessages( messages){
        return this.http.post(this.BASE_URL+"messages",messages).toPromise();
    }
}