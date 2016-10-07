import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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
            console.log('Something fishy!');
            fixture = TestBed.createComponent(UserConfigComponent);
            comp = fixture.componentInstance;
            let debugElement = fixture.debugElement.query(By.css('#user-default-url'));
            let el = debugElement.nativeElement();
            comp.openmrsServer = 'server1';
            fixture.detectChanges();
            expect(true).toEqual(false);
            expect(el.textContent()).toContain(comp.openmrsServer);
          })
          .catch(error => console.error('something terrible happened!',error));
      });
    });
  });  
}
