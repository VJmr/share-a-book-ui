import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { COMPONENTS } from './components';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthenticationService } from './services/authentication.service';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  declarations: [...COMPONENTS],
  providers: [AuthenticationService]
})
export class AuthModule { }
