import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class USERSService {

  constructor(private http: HttpClient) {}
  getallusers() {
    return this.http.get(environment.apiUrl + '/usersservices');
  }
  getusers(ID:any) {
    return this.http.get(environment.apiUrl + '/usersservices/' + ID);
  }
  Createusers(body:any) {
    return this.http.post(environment.apiUrl + '/usersservices', body);
  }
  Updateusers(body:any) {
    return this.http.patch(environment.apiUrl + '/usersservices', body);
  }
  Deleteusers(body:any) {
  return this.http.patch(environment.apiUrl + '/usersservices', body);
}
}
