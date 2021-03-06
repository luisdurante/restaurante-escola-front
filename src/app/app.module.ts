import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AuthenticationInterceptor } from './authentication/interceptor/authentication.interceptor';
import { LoginComponent } from './login/login.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConfirmDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
		MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
		MatInputModule,
		MatFormFieldModule,
		MatProgressSpinnerModule,
		ReactiveFormsModule,
		FormsModule
  ],
  providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
