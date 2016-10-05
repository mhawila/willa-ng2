import { ComponentFixture, TestBed, By, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { UserConfigComponent } from './user-config.component';

export function main() {
  let comp:    UserConfigComponent;
  let fixture: ComponentFixture<UserConfigComponent>;
  
  describe('UserConfigComponent', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ UserConfigComponent ],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' }
        ]
      });
    });
    
    fit('Should display default Openmrs server url', () => {
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            fixture = TestBed.createComponent(UserConfigComponent);
            comp = fixture.componentInstance;
            let debugElement = fixture.debugElement.query(By.css('#user-default-url'));
            let el = debugElement.nativeElement();
            comp.openmrsServer = 'server';
            fixture.detectChanges();
            expect(el.textContent()).toEqual(comp.openmrsServer);
          });
      });
    });
  });  
}
