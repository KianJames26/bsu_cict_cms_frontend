import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class STMService {

  constructor(private http: HttpClient) {}
  getallSTM() {
    return this.http.get(environment.apiUrl + '/stmservices');
  }
  getSTM(ID:any) {
    return this.http.get(environment.apiUrl + '/stmservices/' + ID);
  }
  CreateSTM(body:any) {
    return this.http.post(environment.apiUrl + '/stmservices', body);
  }
  UpdateSTM(body:any) {
    return this.http.patch(environment.apiUrl + '/stmservices', body);
  }
  DeleteSTM(body:any) {
  return this.http.patch(environment.apiUrl + '/stmservices', body);
}
}
