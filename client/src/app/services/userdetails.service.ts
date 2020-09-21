import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserDetails } from './userDetails.model';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  selectedUser: UserDetails = {
    selectedWing: '',
    roomNo: '',
    name: '',
    adharNo: '',
    mobile: '',
    doj: '',
    deposit: '',
    rent: '',
    subPersonName: '',
    subPersonMobile: '',
    password: ''
  }

  constructor(private http: HttpClient) { }

  post(user: UserDetails) {
    return this.http.post(environment.apiBaseUrl + '/userdetails', user);
  }

  get() {
    return this.http.get(environment.apiBaseUrl + '/userdetails');
  }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials);
  }
}
