import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestApprovalLayoutComponent } from './pages/request-approval-layout/request-approval-layout.component';

const routes: Routes = [
	{
		path: '',
		component: RequestApprovalLayoutComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RequestApprovalRoutingModule {}
