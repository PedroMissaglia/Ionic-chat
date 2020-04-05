import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfigProfilePage } from './config-profile.page';

describe('ConfigProfilePage', () => {
  let component: ConfigProfilePage;
  let fixture: ComponentFixture<ConfigProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
