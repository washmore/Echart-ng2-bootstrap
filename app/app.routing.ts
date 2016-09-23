import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AnotherComponent} from "./another.component";
import {UserDailyReportComponent} from "./user.daily.report.component";
import {TabsComponent} from "./tabs.component";
import {CustomerPublicComponent} from "./customer.public.component";

const appRoutes:Routes = [
    {
        path: '',
        redirectTo: 'dailyReport',
        pathMatch: 'full'
    }, {
        path: 'dailyReport',
        component: UserDailyReportComponent
    }, {
        path: 'relation',
        component: AnotherComponent
    }, {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: '',
                redirectTo: 'customerPublicDaily',
            }, {
                path: 'customerPublicDaily',
                component: CustomerPublicComponent
            }
        ]
    }
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);