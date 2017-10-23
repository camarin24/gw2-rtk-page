import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { environment } from '../../environments/environment';
import { BaseService } from '../services/app.base.service';
import { UserModel } from '../models/UserModel';

@Injectable()
export class AutService {
    constructor(private service: BaseService) {
    }
    isLoggedIn(): boolean {
        let user = this.service.getItem(environment.StorageKey);
        if (user) {
            return true;
        }
        return false;
    }
}