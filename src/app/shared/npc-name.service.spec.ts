import { TestBed } from '@angular/core/testing';

import { NpcNameService } from './npc-name.service';

describe('NpcNameService', () => {
  let service: NpcNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpcNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
