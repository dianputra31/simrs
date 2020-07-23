import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ItemListComponent } from './components/item-list/item-list.component';
import { RequestApprovalLayoutComponent } from './pages/request-approval-layout/request-approval-layout.component';
import { RequestApprovalRoutingModule } from './request-approval-routing.module';

@NgModule({
	declarations: [RequestApprovalLayoutComponent, ItemListComponent],
	imports: [CommonModule, RequestApprovalRoutingModule, SharedModule],
})
export class RequestApprovalModule {}
