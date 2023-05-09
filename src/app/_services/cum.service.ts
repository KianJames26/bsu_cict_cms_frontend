import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CumService {

  constructor(private http: HttpClient) {}
  getallCUM() {
    return this.http.get(environment.apiUrl + '/cumservices');
  }
  getCUM(ID:any) {
    return this.http.get(environment.apiUrl + '/cumservices/' + ID);
  }
  CreateCUM(body:any) {
    return this.http.post(environment.apiUrl + '/cumservices', body);
  }
  UpdateCUM(body:any) {
    return this.http.patch(environment.apiUrl + '/cumservices', body);
  }
  DeleteCUM(body:any) {
  return this.http.patch(environment.apiUrl + '/cumservices', body);
}
}
