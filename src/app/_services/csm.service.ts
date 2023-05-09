import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Subjects } from '@app/_models/subject';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CSMService {

  //public subject: Observable<Subjects | null>;
  constructor(private http: HttpClient) { }
  getallCSM() {
    //return this.http.get(environment.apiUrl + '/subject');
    return this.http.get<Subjects[]>(`${environment.apiUrl}/subject`);
  }

  getCSM(id: string) {
    return this.http.get<any>(`${environment.apiUrl}/subject/${id}`).pipe(
      map(data => {
        return data[0];
      })
    );;
  }

  //   getById(id: string) {
  //     return this.http.get<User>(`${environment.apiUrl}/account/${id}`);
  // }

  CreateCSM(data: any) {
    // return this.http.post(environment.apiUrl + '/subject', subject);
    return this.http.post(`${environment.apiUrl}/subject`, data).pipe(map(data => {
      console.log(data);
      return data;
      })
    );
  }

  UpdateCSM(id: string, body: any) {
    return this.http.put(`${environment.apiUrl}/subject/${id}`, body).pipe(map(data => {
      console.log(data);
      return data;
  }));
  }


  DeleteCSM(id: number) {
    return this.http.delete(`${environment.apiUrl}/subject/${id}`);
  }
  // delete(id: string) {
  //   return this.http.delete(`${environment.apiUrl}/account/${id}`)
  //       .pipe(map(x => {
  //           // auto logout if the logged in user deleted their own record
  //           if (id == this.userValue?.id) {
  //               this.logout();
  //           }
  //           return x;
  //       }));
  // }
}
