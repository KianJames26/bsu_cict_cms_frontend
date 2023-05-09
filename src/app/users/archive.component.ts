import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';


@Component({ templateUrl: 'archive.component.html' })
export class ArchiveComponent {
    users?: any[];
    
    constructor(private accountService: AccountService) {}
  
    // Function to call the archive user function in the service
    archiveUser(userId: number): void {
      this.accountService.archiveUser(userId);
    }
    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    deleteUser(id: string) {
        const user = this.users!.find(x => x.id === id);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => this.users = this.users!.filter(x => x.id !== id));
    }
  }

   