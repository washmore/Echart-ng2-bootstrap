import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {HttpModule} from "@angular/http";
import "./rxjs-extensions";
import {WelcomeComponent} from "./welcome.component";
import {AnotherComponent} from "./another.component";
import {UserlistComponent} from "./userlist.component";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        UserlistComponent,
        AnotherComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}