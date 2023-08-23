import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { resolveProductResolver } from './resolve-product.resolver';

describe('resolveProductResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => resolveProductResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
