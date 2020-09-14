import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FourthPage } from './fourth.page';

describe('FourthPage', () => {
  let component: FourthPage;
  let fixture: ComponentFixture<FourthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FourthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
