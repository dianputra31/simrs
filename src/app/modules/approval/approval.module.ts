import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ApprovalRoutingModule } from './approval-routing.module';
import { ApprovalLayoutComponent } from './pages/approval-layout/approval-layout.component';

@NgModule({
	declarations: [ApprovalLayoutComponent],
	imports: [CommonModule, ApprovalRoutingModule, SharedModule],
})
export class ApprovalModule {}
