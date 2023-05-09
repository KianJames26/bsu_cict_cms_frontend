import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) {}
  getallFEEDBACK() {
    return this.http.get(environment.apiUrl + '/feedbackservices');
  }
  getFEEDBACK(ID:any) {
    return this.http.get(environment.apiUrl + '/feedbackservices/' + ID);
  }
  CreateFEEDBACK(body:any) {
    return this.http.post(environment.apiUrl + '/feedbackservices', body);
  }
  UpdateFEEDBACK(body:any) {
    return this.http.patch(environment.apiUrl + '/feedbackservices', body);
  }
  DeleteFEEDBACK(body:any) {
  return this.http.patch(environment.apiUrl + '/feedbackservices', body);
}
}
