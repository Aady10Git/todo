import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavListService {

  constructor() { }

  sideNavItemList = [{
    title: 'inbox',
    icon: 'dummy'
  },
  {
    title: 'team inbox',
    icon: 'dummy'
  },{
    title: 'today',
    icon: 'dummy'
  },
  {
    title: 'newxt 7 days',
    icon: 'dummy'
  },
  {
    title: 'cleaning',
    icon: 'dummy'
  },
  {
    title: 'important',
    icon: 'dummy'
  }];
}
