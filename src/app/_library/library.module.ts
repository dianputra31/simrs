import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryLayoutComponent } from './pages/library-layout/library-layout.component';
import { ColorComponent } from './components/color/color.component';

@NgModule({
	declarations: [LibraryLayoutComponent, ColorComponent],
	imports: [CommonModule, LibraryRoutingModule],
})
export class LibraryModule {}
