import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { COMPONENTS } from './components';
import { AuthRoutingModule } from './auth-routing.module';
import { SERVICES } from './services';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  declarations: [...COMPONENTS],
  providers: [...SERVICES]
})
export class AuthModule { }
