import { NgModule,NO_ERRORS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule,MatCardModule,MatIconModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService, EventService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { CreateComponent } from './create';
import { FooterComponent } from './footer';
import { SubmitComponent } from './submit';
import { DashboardComponent } from './dashboard';
import { EventsComponent } from './events';
import { RequestsComponent } from './requests';
import { NavbarComponent } from './navbar';
import { ParticlesModule } from 'angular-particle';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        FlexLayoutModule,
        MatButtonModule, MatCheckboxModule,MatCardModule,MatIconModule,WavesModule, ButtonsModule, IconsModule,
        MatExpansionModule,
        BrowserAnimationsModule,
        ParticlesModule,
        MDBBootstrapModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        CreateComponent,
        NavbarComponent,
        EventsComponent,
        FooterComponent,
        RequestsComponent,
        SubmitComponent,
        DashboardComponent
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        EventService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }