import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { parentguardGuard } from './parentguard.guard';

describe('parentguardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => parentguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
