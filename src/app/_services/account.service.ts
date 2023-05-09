import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;
    accessTokenSubject?: BehaviorSubject<string | null>;
    refreshTokenSubject?: BehaviorSubject<string | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
        this.accessTokenSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('accessToken')!));
        this.refreshTokenSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('refreshToken')!));
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/account/login`, { loginName:username, password })
            .pipe(map(user => {
                console.log(user)
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('accessToken', JSON.stringify(user.accessToken));
                localStorage.setItem('refreshToken', JSON.stringify(user.refreshToken));
                this.userSubject.next(user);
                this.accessTokenSubject?.next(user.accessToken);
                this.refreshTokenSubject?.next(user.refreshToken);
                return user;

            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        //localStorage.removeItem('user');
        localStorage.clear()
        this.userSubject.next(null);
        this.accessTokenSubject?.next(null);
        this.refreshTokenSubject?.next(null);
        this.router.navigate(['/account/login']);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/account`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/account`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/account/${id}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/account/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue?.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/account/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue?.id) {
                    this.logout();
                }
                return x;
            }));
    }
    // Function to archive a user
  archiveUser(userId: number): void {
    // TODO: Implement archive user functionality
  }
}
