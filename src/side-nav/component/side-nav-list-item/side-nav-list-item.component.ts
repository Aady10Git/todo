import { Component, OnInit } from '@angular/core';
import { SideNavListService } from 'src/side-nav/service/side-nav-list.service';

@Component({
  selector: 'app-side-nav-list-item',
  templateUrl: './side-nav-list-item.component.html',
  styleUrls: ['./side-nav-list-item.component.css']
})
export class SideNavListItemComponent implements OnInit {

  constructor(private _snlService: SideNavListService) { }

  ngOnInit() {
  }

}
