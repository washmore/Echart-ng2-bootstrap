import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AnotherComponent} from "./another.component";
import {UserDailyReportComponent} from "./user.daily.report.component";

const appRoutes:Routes = [
    {
        path: '',
        redirectTo: '/dailyReport',
        pathMatch: 'full'
    }, {
        path: 'dailyReport',
        component: UserDailyReportComponent
    }, {
        path: 'relation',
        component: AnotherComponent
    }
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);