import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { UserConfigComponent } from './user-config.component';

export function main() {
  let comp:    UserConfigComponent;
  let fixture: ComponentFixture<UserConfigComponent>;
  
  describe('UserConfigComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ UserConfigComponent ],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' }
        ]
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UserConfigComponent);
        comp = fixture.componentInstance;
      });
    }));
    
    fit('Should display default Openmrs server url', () => {
      expect(true).toBe(1);
    });
  });  
}
