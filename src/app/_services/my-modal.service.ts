import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyModalService {
  private modalOpen = new Subject<void>();

  modalOpen$ = this.modalOpen.asObservable();

  openModal() {
    this.modalOpen.next();
  }
}
