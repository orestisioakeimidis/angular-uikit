import {TestBed} from '@angular/core/testing';
import {Accordion} from './accordion';

describe('Accordion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [Accordion]});
  });

  it('should work', () => {
    let fixture = TestBed.createComponent(Accordion);
    expect(fixture.componentInstance instanceof Accordion).toBe(true, 'should create Accordion');
  });
});
