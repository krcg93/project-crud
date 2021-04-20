import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService, AlertService } from '@app/_services';
import { User } from '@app/_models';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '@app/_models/users';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users!: User[];
    usersUpdate!: User[];
    user!: Users;
    loading = false;
    private gridApi: any;

    constructor(
        private userService: UserService,
        private alertService: AlertService,
        private router: Router,
        private route: ActivatedRoute
        ) {}

    ngOnInit() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    onSubmit() {
        this.alertService.clear();
        this.loading = true;
    }

    updateUser() {
        this.userService.update(this.user)
            .pipe(first())
            .subscribe(() => {
                this.alertService.success('Usuario actualizado', { keepAfterRouteChange: true });
            })
            .add(() => this.loading = false);
    }

    itemSelect(param:User, event:any){
        let check = event.target.checked;
        param["indicted"] = check;
        if(this.user && this.user.users){
            this.user.users.push(param);
        }else{
            this.user = new Users(param);
        }
    }
}