import { SalahModule } from './salah/salah.module';
import { UiModule } from './ui/ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { YearlySalahFormComponent } from './salah/yearly-salah-form/yearly-salah-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'salahs', component: YearlySalahFormComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    UiModule,
    SalahModule,
    ReactiveFormsModule,
    // control routing for whole app
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
