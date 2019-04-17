import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { AuthGuard } from '../guards/auth-guard.service';
import { CreateComponent } from './admin/create/create.component';
import { UpdateComponent } from './admin/update/update.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { DisplayComponent } from './admin/display/display.component';
import { AccountComponent } from './manager/account/account.component';
import { IncrementComponent } from './manager/increment/increment.component';
import { RoleGuard } from '../guards/role-guard.service';

export const dashboardroutes : Routes = 
[
    {
        path : 'dashboard',
        component : LayoutComponent,
        canActivate : [AuthGuard],
        children : 
        [

            {

                path : '',
                component : LayoutComponent
            },

            {

                path : 'Admin',
                component : AdminComponent,
                canActivate: [RoleGuard],
                data: {role: 'Admin'},
                children :
                [
                    {
                        path : '',
                        component : CreateComponent
                    },

                    {
                        path : 'create',
                        component : CreateComponent
                    },

                    {
                        path : 'update',
                        component : UpdateComponent
                    },

                    {
                        path : 'delete',
                        component : DeleteComponent
                    },

                    {
                        path : 'display',
                        component : DisplayComponent
                    },
                ]
                
            },

            {
                path : 'Employee',
                component : EmployeeComponent
            },

            {
                path : 'Manager',
                component : ManagerComponent,
                children :
                [

                    {
                        path : '',
                        component : AccountComponent
                    },
                    {
                        path : 'account',
                        component : AccountComponent,
                    },

                    {
                        path : 'increment',
                        component : IncrementComponent,
                    }
                ]
            },
            

        ]
    }
    

];