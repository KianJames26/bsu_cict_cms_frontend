import { CSMService } from './../_services/csm.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '@app/_services';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
  private apiUrl = environment.apiUrl;

  form!: FormGroup;
  id?: string;
  title!: string;
  loading = false;
  submitting = false;
  submitted = false;

  //subjectCode, subjectName, syllabus

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private csmService: CSMService,
    private alertService: AlertService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // form with validation rules
    this.form = this.formBuilder.group({
      subjectName: ['', Validators.required],
      subjectCode: ['', Validators.required],
      syllabus: ['', Validators.required],
      // // password only required in add mode
      // password: ['', [Validators.minLength(6), ...(!this.id ? [Validators.required] : [])]]
    });

    this.title = 'Add Subject';
    if (this.id) {
      // edit mode
      this.title = 'Edit User';
      this.loading = true;
      this.csmService.getCSM(this.id).subscribe({
        next: (data) => {
          console.log('subject', data.subject_name);
          this.form.patchValue({
            subjectName: data.subject_name,
            subjectCode: data.subject_code,
            syllabus: data.syllabus,
          });
          this.loading = false;
        },
        error: (err) => {
          console.log('Get Subjects Failed', err);
        },
      });
    }
    // if (this.id) {
    //     // edit mode
    //     this.title = 'Edit Subject';
    //     this.loading = true;
    //     this.csmService.getCSM(this.id)
    //         .pipe(first())
    //         .subscribe(x => {
    //           this.form.patchValue({
    //             SubjectName:x.
    //             SubjectCode:x
    //             Syllabus:x.

    //           });
    //           this.loading = false;
    //       });
    // }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }
  onFileSelect(event: any): void {
    const syllabus = event.target.files[0];
    this.form.get('syllabus')?.setValue(syllabus);
  }
  // onSubmit() {

  //   // const payload = {
  //   //   'subjectName': this.form.get('subjectName')?.value,
  //   //   'subjectCode': this.form.get('subjectCode')?.value,
  //   //   'syllabus': this.form.value.syllabus,
  //   // };

  //   // this.csmService.CreateCSM(payload).subscribe({
  //   //   next: (data) => {
  //   //     console.log('subject-create',data);
  //   //   },
  //   //   error: (err) => {
  //   //     console.log("Add Subjects Failed", err);
  //   //   }
  //   // });
  //   // this.http.post(`${this.apiUrl}/subject`, payload)
  //   //   .subscribe((response: any) => {
  //   //     console.log(response);

  //   //   }, error => { console.log(error); });

  // }
  onSubmit() {
    // console.log(this.form.value);
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.submitting = true;
    this.addSubject()
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Subject Saved', {
            keepAfterRouteChange: true,
          });
          this.router.navigateByUrl('/CSM');
        },
        error: (error) => {
          this.alertService.error(error);
          this.submitting = false;
        },
      });
  }

  private addSubject() {
    // create or update user based on id param
    return this.id
      ? this.csmService.UpdateCSM(this.id!, this.form.value)
      : this.csmService.CreateCSM(this.form.value);
  }
}
