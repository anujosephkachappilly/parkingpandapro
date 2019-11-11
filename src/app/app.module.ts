import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,MatIconModule,MatToolbarModule } from '@angular/material';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { SecAllotComponent } from './sec-allot/sec-allot.component';
import { RegisterComponent } from './sec-form/sec-form.component';
import { SecViewComponent } from './sec-view/sec-view.component';
import { SecDeleteComponent } from './sec-delete/sec-delete.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    AdminLoginComponent,
    AdminPanelComponent,
    AdminCreateComponent,
    AdminViewComponent,
    SecAllotComponent,
    RegisterComponent,
    SecViewComponent,
    SecDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
