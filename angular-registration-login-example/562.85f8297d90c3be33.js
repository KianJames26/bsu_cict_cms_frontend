"use strict";(self.webpackChunkangular_registration_login_example=self.webpackChunkangular_registration_login_example||[]).push([[562],{562:(P,g,s)=>{s.r(g),s.d(g,{UsersModule:()=>E});var r=s(433),c=s(6895),a=s(9230),t=s(8256);let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[a.lC],encapsulation:2}),n})();var u=s(590),p=s(6082);function v(n,i){1&n&&t._UZ(0,"span",23)}function b(n,i){1&n&&(t.TgZ(0,"span"),t._uU(1,"Delete"),t.qZA())}function h(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr",18)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td",19)(12,"a",20),t._uU(13,"Edit"),t.qZA(),t.TgZ(14,"button",21),t.NdJ("click",function(){const l=t.CHM(e).$implicit,f=t.oxw();return t.KtG(f.deleteUser(l.id))}),t.YNc(15,v,1,0,"span",22),t.YNc(16,b,2,0,"span",17),t.qZA()()()}if(2&n){const e=i.$implicit;t.xp6(2),t.Oqu(e.firstName),t.xp6(2),t.Oqu(e.username),t.xp6(2),t.Oqu(e.firstName),t.xp6(2),t.Oqu(e.username),t.xp6(2),t.Oqu(e.username),t.xp6(2),t.MGl("routerLink","edit/",e.id,""),t.xp6(2),t.Q6J("disabled",e.isDeleting),t.xp6(1),t.Q6J("ngIf",e.isDeleting),t.xp6(1),t.Q6J("ngIf",!e.isDeleting)}}function x(n,i){1&n&&(t.TgZ(0,"tr")(1,"td",24),t._UZ(2,"span",25),t.qZA()())}const A=function(){return{exact:!0}};let C=(()=>{class n{constructor(e){this.accountService=e}ngOnInit(){this.accountService.getAll().pipe((0,u.P)()).subscribe(e=>this.users=e)}deleteUser(e){this.users.find(d=>d.id===e).isDeleting=!0,this.accountService.delete(e).pipe((0,u.P)()).subscribe(()=>this.users=this.users.filter(d=>d.id!==e))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.B))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:52,vars:4,consts:[["rel","stylesheet","href","https://www.w3schools.com/w3css/4/w3.css"],[1,"sidenav"],["routerLink","/","routerLinkActive","active",1,"w3-bar-item","w3-button",3,"routerLinkActiveOptions"],["routerLink","/users","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/CSM","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/STM","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/CUM","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/CM","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/feedback","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/settings","routerLinkActive","active",1,"w3-button","w3-bottom",2,"width","25%"],[1,"navbar"],[2,"margin-left","26%"],[1,"w3-table-all"],[1,"w3-gray"],[2,"width","20%"],[2,"width","10%"],["class","w3-hover-gray",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"w3-hover-gray"],[2,"white-space","nowrap"],[1,"w3-button","w3-round","w3-ripple","w3-green",3,"routerLink"],[1,"w3-button","w3-round","w3-ripple","w3-red",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,o){1&e&&(t.TgZ(0,"html"),t._UZ(1,"link",0),t.TgZ(2,"body")(3,"div",1)(4,"a",2),t._uU(5,"Dashboard"),t.qZA(),t._UZ(6,"br"),t.TgZ(7,"a",3),t._uU(8,"User Management"),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"a",4),t._uU(11,"Course Subject Management"),t.qZA(),t._UZ(12,"br"),t.TgZ(13,"a",5),t._uU(14,"Specialization Track Management"),t.qZA(),t._UZ(15,"br"),t.TgZ(16,"a",6),t._uU(17,"Curriculum Management"),t.qZA(),t._UZ(18,"br"),t.TgZ(19,"a",7),t._uU(20,"Committee Management"),t.qZA(),t._UZ(21,"br"),t.TgZ(22,"a",8),t._uU(23,"Feedback"),t.qZA(),t._UZ(24,"br"),t.TgZ(25,"a",9),t._uU(26,"Settings"),t.qZA()(),t.TgZ(27,"div",10)(28,"a"),t._uU(29,"CICT Curriculum Management System > Feedback"),t.qZA()(),t.TgZ(30,"div",11),t._UZ(31,"br")(32,"br")(33,"br")(34,"br"),t.TgZ(35,"table",12)(36,"thead")(37,"tr",13)(38,"th",14),t._uU(39,"Curriculum ID"),t.qZA(),t.TgZ(40,"th",14),t._uU(41,"Version"),t.qZA(),t.TgZ(42,"th",14),t._uU(43,"Date"),t.qZA(),t.TgZ(44,"th",14),t._uU(45,"Submitted By"),t.qZA(),t.TgZ(46,"th",14),t._uU(47,"Position"),t.qZA(),t._UZ(48,"th",15),t.qZA()(),t.TgZ(49,"tbody"),t.YNc(50,h,17,9,"tr",16),t.YNc(51,x,3,0,"tr",17),t.qZA()()()()()),2&e&&(t.xp6(4),t.Q6J("routerLinkActiveOptions",t.DdM(3,A)),t.xp6(46),t.Q6J("ngForOf",o.users),t.xp6(1),t.Q6J("ngIf",!o.users))},dependencies:[c.sg,c.O5,a.rH,a.Od],styles:[".navbar[_ngcontent-%COMP%] {\n      height: 10%;\n      width: 100%;\n      position: fixed;\n      top: 0;\n      left: 0;\n      background-color: #5c5a5a;\n      overflow-x: hidden;\n    }\n    .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n      text-align: left; \n      font-size: 22px;\n      color: #e7e1e1;\n      display: block;\n      margin-left: 26%;\n      margin-top: 1%;\n      }    \n    .sidenav[_ngcontent-%COMP%] {\n      height: 100%;\n      width: 25%;\n      position: fixed;\n      z-index: 1;\n      top: 0;\n      left: 0;\n      background-color: #464444;\n      overflow-x: hidden;\n      padding-top: 20px;\n    }\n    \n    .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      text-align: left;\n      font-family: Georgia, 'Times New Roman', Times, serif;\n      font-weight: bold;\n      font-size: 16px;\n      color: #e7e5e5;\n      display: block;\n    }\n    .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #f1f1f1;\n    }\n    \n    .main[_ngcontent-%COMP%] {\n      margin-left: 160px; \n      font-size: 28px; \n      padding: 0px 10px;\n    }\n    \n    @media screen and (max-height: 450px) {\n      .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\n      .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {font-size: 18px;}\n    }"]}),n})();function T(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"First Name is required"),t.qZA())}function U(n,i){if(1&n&&(t.TgZ(0,"div",17),t.YNc(1,T,2,0,"div",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.firstName.errors.required)}}function q(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Last Name is required"),t.qZA())}function w(n,i){if(1&n&&(t.TgZ(0,"div",17),t.YNc(1,q,2,0,"div",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.lastName.errors.required)}}function k(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Username is required"),t.qZA())}function L(n,i){if(1&n&&(t.TgZ(0,"div",17),t.YNc(1,k,2,0,"div",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.username.errors.required)}}function N(n,i){1&n&&(t.TgZ(0,"em"),t._uU(1,"(Leave blank to keep the same password)"),t.qZA())}function y(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function M(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Password must be at least 6 characters"),t.qZA())}function I(n,i){if(1&n&&(t.TgZ(0,"div",17),t.YNc(1,y,2,0,"div",11),t.YNc(2,M,2,0,"div",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.password.errors.minlength)}}function J(n,i){1&n&&t._UZ(0,"span",18)}const m=function(n){return{"is-invalid":n}};function S(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const d=t.oxw();return t.KtG(d.onSubmit())}),t.TgZ(1,"div",4)(2,"div",5)(3,"label",6),t._uU(4,"First Name"),t.qZA(),t._UZ(5,"input",7),t.YNc(6,U,2,1,"div",8),t.qZA(),t.TgZ(7,"div",5)(8,"label",6),t._uU(9,"Last Name"),t.qZA(),t._UZ(10,"input",9),t.YNc(11,w,2,1,"div",8),t.qZA()(),t.TgZ(12,"div",4)(13,"div",5)(14,"label",6),t._uU(15,"Username"),t.qZA(),t._UZ(16,"input",10),t.YNc(17,L,2,1,"div",8),t.qZA(),t.TgZ(18,"div",5)(19,"label",6),t._uU(20," Password "),t.YNc(21,N,2,0,"em",11),t.qZA(),t._UZ(22,"input",12),t.YNc(23,I,3,2,"div",8),t.qZA()(),t.TgZ(24,"div",13)(25,"button",14),t.YNc(26,J,1,0,"span",15),t._uU(27," Save "),t.qZA(),t.TgZ(28,"a",16),t._uU(29,"Cancel"),t.qZA()()()}if(2&n){const e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(5),t.Q6J("ngClass",t.VKq(12,m,e.submitted&&e.f.firstName.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.firstName.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(14,m,e.submitted&&e.f.lastName.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.lastName.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(16,m,e.submitted&&e.f.username.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.username.errors),t.xp6(4),t.Q6J("ngIf",e.id),t.xp6(1),t.Q6J("ngClass",t.VKq(18,m,e.submitted&&e.f.password.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.password.errors),t.xp6(2),t.Q6J("disabled",e.submitting),t.xp6(1),t.Q6J("ngIf",e.submitting)}}function O(n,i){1&n&&(t.TgZ(0,"div",19),t._UZ(1,"span",20),t.qZA())}let _=(()=>{class n{constructor(e,o,d,l,f){this.formBuilder=e,this.route=o,this.router=d,this.accountService=l,this.alertService=f,this.loading=!1,this.submitting=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.form=this.formBuilder.group({firstName:["",r.kI.required],lastName:["",r.kI.required],username:["",r.kI.required],password:["",[r.kI.minLength(6),...this.id?[]:[r.kI.required]]]}),this.title="Add User",this.id&&(this.title="Edit User",this.loading=!0,this.accountService.getById(this.id).pipe((0,u.P)()).subscribe(e=>{this.form.patchValue(e),this.loading=!1}))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.saveUser().pipe((0,u.P)()).subscribe({next:()=>{this.alertService.success("User saved",{keepAfterRouteChange:!0}),this.router.navigateByUrl("/users")},error:e=>{this.alertService.error(e),this.submitting=!1}}))}saveUser(){return this.id?this.accountService.update(this.id,this.form.value):this.accountService.register(this.form.value)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(a.gz),t.Y36(a.F0),t.Y36(p.B),t.Y36(p.c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:5,vars:2,consts:[[2,"margin-left","25%"],[3,"formGroup","ngSubmit",4,"ngIf"],["class","text-center m-5",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col"],[1,"form-label"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],[4,"ngIf"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"mb-3"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"text-center","m-5"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Add Course"),t.qZA(),t.YNc(3,S,30,20,"form",1),t.YNc(4,O,2,0,"div",2),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf",!o.loading),t.xp6(1),t.Q6J("ngIf",o.loading))},dependencies:[c.mk,c.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,a.rH],encapsulation:2}),n})();const Q=[{path:"",component:Z,children:[{path:"",component:C},{path:"add",component:_},{path:"edit/:id",component:_}]}];let Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.Bz.forChild(Q),a.Bz]}),n})(),E=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,r.UX,Y]}),n})()}}]);