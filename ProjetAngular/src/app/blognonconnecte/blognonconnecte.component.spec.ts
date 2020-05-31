import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlognonconnecteComponent } from './blognonconnecte.component';

describe('BlognonconnecteComponent', () => {
  let component: BlognonconnecteComponent;
  let fixture: ComponentFixture<BlognonconnecteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlognonconnecteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlognonconnecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
