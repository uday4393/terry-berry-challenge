import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { IMyInfo } from '../my-info';

import { MyInfoService } from '../../../services/repositories/my-info.service';
import { LoaderService } from '../../../services/loader/loader.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss']
})
export class MyInfoComponent implements OnInit {
  
  tabIndex: number = 0;
  
  myInformationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    professionalExperience: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    mobile: new FormControl('', Validators.pattern('^(\\+\\d{1,3}[- ]?)?\\d{10}$')),
    hobbies: new FormControl(''),
    description: new FormControl(''),
    skills: new FormControl('')
  });

  constructor(
    private myInfoService: MyInfoService,
    private loaderService: LoaderService,
    private toastr: ToastrService
  ) { }

  isMyInformationLoaded(): boolean {
    return this.myInfoService.isMyInformationLoaded;
  }

  saveMyInfo(): void {
    const myInfo = this.myInformationForm.getRawValue();
    this.myInfoService.isMyInformationLoaded = {...myInfo};
    this.toastr.success('Information Saved!', 'Success');
    this.myInformationForm.reset(this.myInformationForm.value);
    this.tabIndex = 0
  }

  setMyInfo(myInfo: IMyInfo): void {
    if (!myInfo) {
      return;
    }
    this.myInformationForm.setValue({
      name: myInfo.name,
      professionalExperience: myInfo.professionalExperience,
      email: myInfo.email,
      mobile: myInfo.mobile,
      hobbies: myInfo.hobbies,
      description: myInfo.description,
      skills: myInfo.skills
    });
  }

  loadMyInfo(): void {
    if (this.myInfoService.isMyInformationLoaded) {
      this.setMyInfo(this.myInfoService.myInfo);
    } else {
      this.loaderService.loading = true;
      this.myInfoService.loadMyInfo().subscribe((resp: any) => {
        this.loaderService.loading = false;
        this.myInfoService.isMyInformationLoaded = true;
        if (resp.success) {
          if (!resp.data) {
            return;
          }
          this.myInfoService.myInfo = resp.data;
          this.setMyInfo(resp.data);
        } else {
          this.toastr.error('Error in saving data!', 'Error');
        }
      });
    }
  }

  ngOnInit(): void {
    this.loadMyInfo();
  }

}
