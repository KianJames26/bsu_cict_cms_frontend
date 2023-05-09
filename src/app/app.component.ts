import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';



@Component({ selector: 'app-root', templateUrl: 'app.component.html' , styleUrls: ['app.component.css'] })
export class AppComponent {
    user?: User | null;
      theme = 'default';

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }
    changeTheme(theme: string) {
      this.theme = theme;
      const bodyClasses = document.body.classList;
      bodyClasses.remove('default', 'alt-theme');
      bodyClasses.add(theme);
    }
    logout() {
        this.accountService.logout();
    }
}

