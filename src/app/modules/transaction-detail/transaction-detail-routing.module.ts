import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionDetailLayoutComponent } from './pages/transaction-detail-layout/transaction-detail-layout.component';

const routes: Routes = [
	{
		path: '',
		component: TransactionDetailLayoutComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TransactionDetailRoutingModule { }
