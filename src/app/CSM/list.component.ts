
import { CSMService } from './../_services/csm.service';
import { Component, OnInit } from '@angular/core';
//import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { Subjects } from '@app/_models/subject';


@Component({
  templateUrl: 'list.component.html',

})
export class ListComponent implements OnInit {
  subjects?: any[];
  subject?: Subjects | null;

  constructor(private csmService: CSMService) {}

  ngOnInit() {

    this.csmService
      .getallCSM()
      // .pipe(first())
      .subscribe((subjects) => (this.subjects = subjects));
  }

  deleteSubject(id: number) {
    const subject = this.subjects!.find((x) => x.id === id);
    subject.isDeleting = true;
    this.csmService
      .DeleteCSM(id)
      .pipe(first())
      .subscribe(() => (this.subjects = this.subjects!.filter((x) => x.id !== id)));
  }
}
