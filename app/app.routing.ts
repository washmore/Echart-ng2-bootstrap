import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AnotherComponent} from "./another.component";
import {UserlistComponent} from "./userlist.component";

const appRoutes:Routes = [
    {
        path: '',
        redirectTo: '/userlist',
        pathMatch: 'full'
    }, {
        path: 'userlist',
        component: UserlistComponent
    }, {
        path: 'relation',
        component: AnotherComponent
    }, {
        path: 'detail',
        component: AnotherComponent
    }, {
        path: 'addUser',
        component: AnotherComponent
    }, {
        path: 'editUser/:id',
        component: AnotherComponent
    }
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);