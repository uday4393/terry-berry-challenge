import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment as env} from '../../../environments/environment';
import { IMyInfo } from '../../about-me/components/my-info';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class MyInfoService {
  myInfo: IMyInfo = {
    name: '',
    professionalExperience: 0,
    email: '',
    mobile: '',
    hobbies: [],
    description: '',
    skills: []
  };
  isMyInformationLoaded = false;

  constructor(
    private http: HttpClient
  ) { }

  loadMyInfo(): Observable<any> {
    return this.http.get(`${env.baseUrl}/myInfo`);
  }
}
