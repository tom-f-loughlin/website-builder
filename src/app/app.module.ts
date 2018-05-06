import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { PAGES } from './pages/pages.module';


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
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvTKPpna3GIV6K5GVQ6xX3YOy98M-5kmc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
