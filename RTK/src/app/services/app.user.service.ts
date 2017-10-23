import { CanActivate } from '@angular/router';
import { environment } from '../../environments/environment';
import { BaseService } from '../services/app.base.service';
import { UserModel } from '../models/UserModel';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    constructor(private service:BaseService) {
    }

    login(data:any):Promise<UserModel>{
        return this.service.Post<UserModel>('/Users/Login',data);
    }
    setSession(user:UserModel){
        this.service.setItem(environment.StorageKey,{token:user.Token});
    }
}