import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const users2Module = () => import('./CSM/users.module').then(x => x.UsersModule);
const users3Module = () => import('./STM/users.module').then(x => x.UsersModule);
const users4Module = () => import('./CM/users.module').then(x => x.UsersModule);
const users5Module = () => import('./settings/users.module').then(x => x.UsersModule);
const users6Module = () => import('./feedback/users.module').then(x => x.UsersModule);
const users7Module = () => import('./CUM/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'CSM', loadChildren: users2Module, canActivate: [AuthGuard] },
    { path: 'STM', loadChildren: users3Module, canActivate: [AuthGuard] },
    { path: 'CUM', loadChildren: users7Module, canActivate: [AuthGuard] },
    { path: 'CM', loadChildren: users4Module, canActivate: [AuthGuard] },
    { path: 'feedback', loadChildren: users6Module, canActivate: [AuthGuard] },
    { path: 'settings', loadChildren: users5Module, canActivate: [AuthGuard] },
    
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }