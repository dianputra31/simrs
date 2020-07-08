import { NgModule } from '@angular/core';
import { LoginLayoutComponent } from './pages/login-layout/login-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { AuthGuard } from '../core/auth/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: LoginLayoutComponent
    },
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
				path: 'transaction',
				loadChildren:
					'../transaction/transaction.module#TransactionModule',
			},
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LayoutRoutingModule { }