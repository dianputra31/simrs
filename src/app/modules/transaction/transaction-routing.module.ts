import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionLayoutComponent } from './pages/transaction-layout/transaction-layout.component';

const routes: Routes = [
	{
		path: '',
		component: TransactionLayoutComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TransactionRoutingModule { }
