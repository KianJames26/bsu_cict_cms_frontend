import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CMService {

  constructor(private http: HttpClient) {}
  getallCM() {
    return this.http.get(environment.apiUrl + '/cmservices');
  }
  getCM(ID:any) {
    return this.http.get(environment.apiUrl + '/cmservices/' + ID);
  }
  CreateCM(body:any) {
    return this.http.post(environment.apiUrl + '/cmservices', body);
  }
  UpdateCM(body:any) {
    return this.http.patch(environment.apiUrl + '/cmservices', body);
  }
  DeleteCM(body:any) {
  return this.http.patch(environment.apiUrl + '/cmservices', body);
}
}
