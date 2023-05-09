import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

interface Metric {
    value: number;
    trend: 'apcu' | 'pecu';
  }

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User | null;
    users: Metric = { value: 10, trend: 'apcu' };
    revenue: Metric = { value: 5, trend: 'pecu' };
    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;

    
    }
}