import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { PAGES } from './pages';
import { AccessService } from './pages/shared/access.service';
import { AuthGuardService } from './pages/shared/access.guard.service';


@NgModule({
    declarations: [
        AppComponent,
        ...PAGES
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ROUTING,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAvTKPpna3GIV6K5GVQ6xX3YOy98M-5kmc'
        })
    ],
    providers: [
        AccessService,
        AuthGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
