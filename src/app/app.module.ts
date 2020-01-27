import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { JwtInterceptor, ErrorInterceptor } from './auth/interceptors';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
