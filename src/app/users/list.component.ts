﻿import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  users?: any[];
  user?: User | null;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.user = this.accountService.userValue;
    this.accountService
      .getAll()
      //.pipe(first())
      .subscribe((users) => (this.users = users));
  }

  deleteUser(id: string) {
    const user = this.users!.find((x) => x.id === id);
    user.isDeleting = true;
    this.accountService
      .delete(id)
      .pipe(first())
      .subscribe(() => (this.users = this.users!.filter((x) => x.id !== id)));
  }
}
