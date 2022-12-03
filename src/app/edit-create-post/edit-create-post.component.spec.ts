import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreatePostComponent } from './edit-create-post.component';

describe('EditCreatePostComponent', () => {
  let component: EditCreatePostComponent;
  let fixture: ComponentFixture<EditCreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCreatePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
