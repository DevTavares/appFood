import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedTapiocaMorangoPage } from './feed-tapioca-morango.page';

describe('FeedTapiocaMorangoPage', () => {
  let component: FeedTapiocaMorangoPage;
  let fixture: ComponentFixture<FeedTapiocaMorangoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedTapiocaMorangoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedTapiocaMorangoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
