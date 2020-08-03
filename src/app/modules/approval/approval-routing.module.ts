import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalLayoutComponent } from './pages/approval-layout/approval-layout.component';

const routes: Routes = [
	{
		path: '',
		component: ApprovalLayoutComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ApprovalRoutingModule {}
