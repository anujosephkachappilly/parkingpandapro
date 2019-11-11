import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent  } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { SecAllotComponent } from './sec-allot/sec-allot.component';
import { RegisterComponent } from './sec-form/sec-form.component';
import {SecViewComponent  } from './sec-view/sec-view.component';
import { SecDeleteComponent } from './sec-delete/sec-delete.component';
const routes: Routes = [
  {
  path: '',
  component:HomeComponent
  },
  {
    path: 'home',
    component:HomeComponent
    },
    {
      path: 'dashboard',
      component:DashboardComponent
      },
      {
        path:'admin-login',
        component:AdminLoginComponent
      },
      {
        path:'admin-panel',
        component:AdminPanelComponent
      },
      {
        path:'admin-create',
        component:AdminCreateComponent
      },
      {
        path:'admin-view',
        component:AdminViewComponent
      },
      {
        path:'edit/:sno',
        component:AdminCreateComponent
      },
      {
        path:'sec-allot',
        component:SecAllotComponent
      },
      {
        path:'allot-details/:sno',
        component:RegisterComponent
      },
      {
        path:'sec-view',
        component:SecViewComponent
      },
      {
        path:'sec-delete',
        component:SecDeleteComponent
      }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
