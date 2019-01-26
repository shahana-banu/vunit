import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { NavbarComponent } from './navbar';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { SubmitComponent } from './submit';
import { CreateComponent } from './create';
import { FooterComponent } from './footer';
import { DashboardComponent } from './dashboard';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'submit', component: SubmitComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
    { path: 'navbar', component: NavbarComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);