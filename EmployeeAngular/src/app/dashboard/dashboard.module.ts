import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { dashboardroutes } from './dashboard.routes';
import { routes } from '../app-routing.module';
import { AuthGuard } from '../guards/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CreateComponent } from './admin/create/create.component';
import { UpdateComponent } from './admin/update/update.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { DisplayComponent } from './admin/display/display.component';
import { AccountComponent } from './manager/account/account.component';
import { IncrementComponent } from './manager/increment/increment.component';
import { RoleGuard } from '../guards/role-guard.service';

@NgModule({
  declarations: [AdminComponent, EmployeeComponent, ManagerComponent, LayoutComponent, CreateComponent, UpdateComponent, DeleteComponent, DisplayComponent, AccountComponent, IncrementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardroutes),
    FormsModule,HttpModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, RoleGuard]
})
export class DashboardModule { }
