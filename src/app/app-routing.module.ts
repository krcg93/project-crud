import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: 'users', loadChildren: usersModule },
    { path: 'users/', redirectTo: 'users' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }