import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideNavRoutingModule } from './side-nav-routing.module';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { SideNavListItemComponent } from './component/side-nav-list-item/side-nav-list-item.component';
import { NewListComponent } from './component/new-list/new-list.component';


@NgModule({
  declarations: [SideNavComponent, SideNavListItemComponent, NewListComponent],
  imports: [
    CommonModule,
    SideNavRoutingModule
  ],
  exports: [SideNavComponent]
})
export class SideNavModule { }
