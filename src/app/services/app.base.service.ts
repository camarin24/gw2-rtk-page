import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
declare var $: any;

@Injectable()
export class BaseService {
    private storge = window.localStorage;
    private Headers:HttpHeaders;
    constructor(private http: HttpClient) {
        this.Headers = new HttpHeaders();
        this.Headers.append("Content-Type","application/json; charset=UTF-8");
    }

    getItem(key: string) {
        return this.storge.getItem(key);
    }
    
    setItem(key: string, data: any) {
        this.storge.setItem(key, JSON.stringify(data));
    }

    Post<T>(url:string,data:object):Promise<T> {
        $("mat-progress-bar").show();
        return this.http
            .post(`${environment.API}${url}`, JSON.stringify(data),{headers:this.Headers})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    Get<T>(url:string,data:object):Promise<T> {
        $("mat-progress-bar").show();
        return this.http
            .get(`${environment.API}/${url}`)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        $("mat-progress-bar").hide();
        return res;
    }

    private handleError(error: any): Promise<any> {
        $("mat-progress-bar").hide();
        return Promise.reject(error);
    }

}