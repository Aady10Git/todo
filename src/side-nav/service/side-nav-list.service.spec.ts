import { TestBed } from '@angular/core/testing';

import { SideNavListService } from './side-nav-list.service';

describe('SideNavListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SideNavListService = TestBed.get(SideNavListService);
    expect(service).toBeTruthy();
  });
});
