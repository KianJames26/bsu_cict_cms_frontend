"use strict";(self.webpackChunkangular_registration_login_example=self.webpackChunkangular_registration_login_example||[]).push([[980],{3980:(G,_,s)=>{s.r(_),s.d(_,{UsersModule:()=>D});var r=s(433),d=s(6895),a=s(9230),t=s(8256);let b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[a.lC],encapsulation:2}),n})();var m=s(590),l=s(6082);function Z(n,i){1&n&&t._UZ(0,"span",24)}function h(n,i){1&n&&(t.TgZ(0,"span"),t._uU(1,"Delete"),t.qZA())}function x(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr",19)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td",20)(12,"a",21),t._uU(13,"Edit"),t.qZA(),t.TgZ(14,"button",22),t.NdJ("click",function(){const g=t.CHM(e).$implicit,f=t.oxw();return t.KtG(f.deleteUser(g.id))}),t.YNc(15,Z,1,0,"span",23),t.YNc(16,h,2,0,"span",18),t.qZA()()()}if(2&n){const e=i.$implicit;t.xp6(2),t.Oqu(e.firstName),t.xp6(2),t.Oqu(e.username),t.xp6(2),t.Oqu(e.firstName),t.xp6(2),t.Oqu(e.username),t.xp6(2),t.Oqu(e.username),t.xp6(2),t.MGl("routerLink","edit/",e.id,""),t.xp6(2),t.Q6J("disabled",e.isDeleting),t.xp6(1),t.Q6J("ngIf",e.isDeleting),t.xp6(1),t.Q6J("ngIf",!e.isDeleting)}}function C(n,i){1&n&&(t.TgZ(0,"tr")(1,"td",25),t._UZ(2,"span",26),t.qZA()())}const A=function(){return{exact:!0}};let U=(()=>{class n{constructor(e){this.accountService=e}ngOnInit(){this.accountService.getAll().pipe((0,m.P)()).subscribe(e=>this.users=e)}deleteUser(e){this.users.find(c=>c.id===e).isDeleting=!0,this.accountService.delete(e).pipe((0,m.P)()).subscribe(()=>this.users=this.users.filter(c=>c.id!==e))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.B))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:54,vars:4,consts:[["rel","stylesheet","href","https://www.w3schools.com/w3css/4/w3.css"],[1,"sidenav"],["routerLink","/","routerLinkActive","active",1,"w3-bar-item","w3-button",3,"routerLinkActiveOptions"],["routerLink","/users","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/CSM","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/STM","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/CUM","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/CM","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/feedback","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/settings","routerLinkActive","active",1,"w3-button","w3-bottom",2,"width","25%"],[1,"navbar"],[2,"margin-left","26%"],["routerLink","add",1,"w3-button","w3-round","w3-ripple","w3-green"],[1,"w3-table-all"],[1,"w3-gray"],[2,"width","20%"],[2,"width","10%"],["class","w3-hover-gray",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"w3-hover-gray"],[2,"white-space","nowrap"],[1,"w3-button","w3-round","w3-ripple","w3-green",3,"routerLink"],[1,"w3-button","w3-round","w3-ripple","w3-red",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,o){1&e&&(t.TgZ(0,"html"),t._UZ(1,"link",0),t.TgZ(2,"body")(3,"div",1)(4,"a",2),t._uU(5,"Dashboard"),t.qZA(),t._UZ(6,"br"),t.TgZ(7,"a",3),t._uU(8,"User Management"),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"a",4),t._uU(11,"Course Subject Management"),t.qZA(),t._UZ(12,"br"),t.TgZ(13,"a",5),t._uU(14,"Specialization Track Management"),t.qZA(),t._UZ(15,"br"),t.TgZ(16,"a",6),t._uU(17,"Curriculum Management"),t.qZA(),t._UZ(18,"br"),t.TgZ(19,"a",7),t._uU(20,"Committee Management"),t.qZA(),t._UZ(21,"br"),t.TgZ(22,"a",8),t._uU(23,"Feedback"),t.qZA(),t._UZ(24,"br"),t.TgZ(25,"a",9),t._uU(26,"Settings"),t.qZA()(),t.TgZ(27,"div",10)(28,"a"),t._uU(29,"CICT Curriculum Management System > Committee Management"),t.qZA()(),t.TgZ(30,"div",11),t._UZ(31,"br")(32,"br")(33,"br")(34,"br"),t.TgZ(35,"a",12),t._uU(36,"Add User"),t.qZA(),t.TgZ(37,"table",13)(38,"thead")(39,"tr",14)(40,"th",15),t._uU(41,"Committee ID"),t.qZA(),t.TgZ(42,"th",15),t._uU(43,"Name"),t.qZA(),t.TgZ(44,"th",15),t._uU(45,"Position"),t.qZA(),t.TgZ(46,"th",15),t._uU(47,"Department"),t.qZA(),t.TgZ(48,"th",15),t._uU(49,"Status"),t.qZA(),t._UZ(50,"th",16),t.qZA()(),t.TgZ(51,"tbody"),t.YNc(52,x,17,9,"tr",17),t.YNc(53,C,3,0,"tr",18),t.qZA()()()()()),2&e&&(t.xp6(4),t.Q6J("routerLinkActiveOptions",t.DdM(3,A)),t.xp6(48),t.Q6J("ngForOf",o.users),t.xp6(1),t.Q6J("ngIf",!o.users))},dependencies:[d.sg,d.O5,a.rH,a.Od],styles:[".navbar[_ngcontent-%COMP%] {\n        height: 10%;\n        width: 100%;\n        position: fixed;\n        top: 0;\n        left: 0;\n        background-color: #5c5a5a;\n        overflow-x: hidden;\n    }\n    .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n        text-align: left; \n        font-size: 22px;\n        color: #e7e1e1;\n        display: block;\n        margin-left: 26%;\n        margin-top: 1%;\n      }    \n    .sidenav[_ngcontent-%COMP%] {\n      height: 100%;\n      width: 25%;\n      position: fixed;\n      z-index: 1;\n      top: 0;\n      left: 0;\n      background-color: #464444;\n      overflow-x: hidden;\n      padding-top: 20px;\n    }\n    \n    .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      text-align: left;\n      font-family: Georgia, 'Times New Roman', Times, serif;\n      font-weight: bold;\n      font-size: 16px;\n      color: #e7e5e5;\n      display: block;\n    }\n    .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #f1f1f1;\n    }\n    \n    .main[_ngcontent-%COMP%] {\n      margin-left: 160px; \n      font-size: 28px; \n      padding: 0px 10px;\n    }\n    \n    @media screen and (max-height: 450px) {\n      .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\n      .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {font-size: 18px;}\n    }"]}),n})();var u=s(2340),w=s(529);let T=(()=>{class n{constructor(e){this.http=e}getallCM(){return this.http.get(u.N.apiUrl+"/cmservices")}getCM(e){return this.http.get(u.N.apiUrl+"/cmservices/"+e)}CreateCM(e){return this.http.post(u.N.apiUrl+"/cmservices",e)}UpdateCM(e){return this.http.patch(u.N.apiUrl+"/cmservices",e)}DeleteCM(e){return this.http.patch(u.N.apiUrl+"/cmservices",e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function q(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"First Name is required"),t.qZA())}function k(n,i){if(1&n&&(t.TgZ(0,"div",29),t.YNc(1,q,2,0,"div",23),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.firstName.errors.required)}}function M(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Last Name is required"),t.qZA())}function L(n,i){if(1&n&&(t.TgZ(0,"div",29),t.YNc(1,M,2,0,"div",23),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.lastName.errors.required)}}function y(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Username is required"),t.qZA())}function N(n,i){if(1&n&&(t.TgZ(0,"div",29),t.YNc(1,y,2,0,"div",23),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.username.errors.required)}}function S(n,i){1&n&&(t.TgZ(0,"em"),t._uU(1,"(Leave blank to keep the same password)"),t.qZA())}function O(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function I(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1,"Password must be at least 6 characters"),t.qZA())}function J(n,i){if(1&n&&(t.TgZ(0,"div",29),t.YNc(1,O,2,0,"div",23),t.YNc(2,I,2,0,"div",23),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.password.errors.minlength)}}function P(n,i){1&n&&t._UZ(0,"span",30)}const p=function(n){return{"is-invalid":n}};function Q(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"form",15),t.NdJ("ngSubmit",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.onSubmit())}),t.TgZ(1,"div",16)(2,"div",17)(3,"label",18),t._uU(4,"First Name"),t.qZA(),t._UZ(5,"input",19),t.YNc(6,k,2,1,"div",20),t.qZA(),t.TgZ(7,"div",17)(8,"label",18),t._uU(9,"Last Name"),t.qZA(),t._UZ(10,"input",21),t.YNc(11,L,2,1,"div",20),t.qZA()(),t.TgZ(12,"div",16)(13,"div",17)(14,"label",18),t._uU(15,"Username"),t.qZA(),t._UZ(16,"input",22),t.YNc(17,N,2,1,"div",20),t.qZA(),t.TgZ(18,"div",17)(19,"label",18),t._uU(20," Password "),t.YNc(21,S,2,0,"em",23),t.qZA(),t._UZ(22,"input",24),t.YNc(23,J,3,2,"div",20),t.qZA()(),t.TgZ(24,"div",25)(25,"button",26),t.YNc(26,P,1,0,"span",27),t._uU(27," Save "),t.qZA(),t.TgZ(28,"a",28),t._uU(29,"Cancel"),t.qZA()()()}if(2&n){const e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(5),t.Q6J("ngClass",t.VKq(12,p,e.submitted&&e.f.firstName.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.firstName.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(14,p,e.submitted&&e.f.lastName.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.lastName.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(16,p,e.submitted&&e.f.username.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.username.errors),t.xp6(4),t.Q6J("ngIf",e.id),t.xp6(1),t.Q6J("ngClass",t.VKq(18,p,e.submitted&&e.f.password.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.password.errors),t.xp6(2),t.Q6J("disabled",e.submitting),t.xp6(1),t.Q6J("ngIf",e.submitting)}}function Y(n,i){1&n&&(t.TgZ(0,"div",31),t._UZ(1,"span",32),t.qZA())}const E=function(){return{exact:!0}};let v=(()=>{class n{constructor(e,o,c,g,f,B){this.CMService=e,this.formBuilder=o,this.route=c,this.router=g,this.accountService=f,this.alertService=B,this.loading=!1,this.submitting=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.form=this.formBuilder.group({firstName:["",r.kI.required],lastName:["",r.kI.required],username:["",r.kI.required],password:["",[r.kI.minLength(6),...this.id?[]:[r.kI.required]]]}),this.title="Add User",this.id&&(this.title="Edit User",this.loading=!0,this.accountService.getById(this.id).pipe((0,m.P)()).subscribe(e=>{this.form.patchValue(e),this.loading=!1}))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.saveUser().pipe((0,m.P)()).subscribe({next:()=>{this.alertService.success("User saved",{keepAfterRouteChange:!0}),this.router.navigateByUrl("/users")},error:e=>{this.alertService.error(e),this.submitting=!1}}))}saveUser(){return this.id?this.accountService.update(this.id,this.form.value):this.accountService.register(this.form.value)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T),t.Y36(r.qu),t.Y36(a.gz),t.Y36(a.F0),t.Y36(l.B),t.Y36(l.c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:38,vars:5,consts:[["name","viewport","content","width=device-width, initial-scale=1"],["rel","stylesheet","href","https://www.w3schools.com/w3css/4/w3.css"],["href","https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css","rel","stylesheet","integrity","sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi","crossorigin","anonymous"],[1,"sidenav"],["routerLink","/","routerLinkActive","active",1,"w3-bar-item","w3-button",3,"routerLinkActiveOptions"],["routerLink","/users","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/CSM","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/STM","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/CUM","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/CM","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/feedback","routerLinkActive","active",1,"w3-bar-item","w3-button"],["routerLink","/settings","routerLinkActive","active",1,"w3-button","w3-bottom",2,"width","25%"],[1,"navbar"],["style","margin-left:26%",3,"formGroup","ngSubmit",4,"ngIf"],["class","text-center m-5",4,"ngIf"],[2,"margin-left","26%",3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col"],[1,"form-label"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],[4,"ngIf"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"mb-3"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"text-center","m-5"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,o){1&e&&(t.TgZ(0,"html"),t._UZ(1,"meta",0)(2,"link",1)(3,"link",2),t.TgZ(4,"body")(5,"div",3)(6,"a",4),t._uU(7,"Dashboard"),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"a",5),t._uU(10,"User Management"),t.qZA(),t._UZ(11,"br"),t.TgZ(12,"a",6),t._uU(13,"Course Subject Management"),t.qZA(),t._UZ(14,"br"),t.TgZ(15,"a",7),t._uU(16,"Specialization Track Management"),t.qZA(),t._UZ(17,"br"),t.TgZ(18,"a",8),t._uU(19,"Curriculum Management"),t.qZA(),t._UZ(20,"br"),t.TgZ(21,"a",9),t._uU(22,"Committee Management"),t.qZA(),t._UZ(23,"br"),t.TgZ(24,"a",10),t._uU(25,"Feedback"),t.qZA(),t._UZ(26,"br"),t.TgZ(27,"a",11),t._uU(28,"Settings"),t.qZA()(),t.TgZ(29,"div",12)(30,"a"),t._uU(31),t.qZA()(),t._UZ(32,"br")(33,"br")(34,"br")(35,"br"),t.YNc(36,Q,30,20,"form",13),t.YNc(37,Y,2,0,"div",14),t.qZA()()),2&e&&(t.xp6(6),t.Q6J("routerLinkActiveOptions",t.DdM(4,E)),t.xp6(25),t.hij("CICT Curriculum Management System > User Management > ",o.title,""),t.xp6(5),t.Q6J("ngIf",!o.loading),t.xp6(1),t.Q6J("ngIf",o.loading))},dependencies:[d.mk,d.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,a.rH,a.Od],styles:[".navbar[_ngcontent-%COMP%] {\n          height: 10%;\n          width: 100%;\n          position: fixed;\n          top: 0;\n          left: 0;\n          background-color: #5c5a5a;\n          overflow-x: hidden;\n          }\n        .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n        text-align: left; \n        font-size: 22px;\n        color: #e7e1e1;\n        display: block;\n        margin-left: 26%;\n        margin-top: 1%;\n         }   \n        .sidenav[_ngcontent-%COMP%] {\n          height: 100%;\n          width: 25%;\n          position: fixed;\n          z-index: 1;\n          top: 0;\n          left: 0;\n          background-color: #464444;\n          overflow-x: hidden;\n          padding-top: 20px;\n        }\n        .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          text-align: left;\n          font-family: Georgia, 'Times New Roman', Times, serif;\n          font-weight: bold;\n          font-size: 16px;\n          color: #e7e5e5;\n          display: block;\n        }\n        \n        .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n          color: #ffffff;\n        }\n        \n        .main[_ngcontent-%COMP%] {\n          margin-left: 160px; \n          font-size: 28px; \n          padding: 0px 10px;\n        }\n        \n        @media screen and (max-height: 450px) {\n          .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\n          .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {font-size: 18px;}\n        }"]}),n})();const z=[{path:"",component:b,children:[{path:"",component:U},{path:"add",component:v},{path:"edit/:id",component:v}]}];let F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.Bz.forChild(z),a.Bz]}),n})(),D=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,r.UX,F]}),n})()}}]);