import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { UserConfigComponent } from './user-config.component';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

export function main() {
  let comp:    UserConfigComponent;
  let fixture: ComponentFixture<UserConfigComponent>;
  let debugElement: DebugElement;
  
  describe('UserConfigComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ FormsModule, Ng2Bs3ModalModule ],
        declarations: [ UserConfigComponent ],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' }
        ],
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UserConfigComponent);
        comp = fixture.componentInstance;
        debugElement = fixture.debugElement.query(By.css('div .form-group'));
      });
    }));
    
    it('Should Exist', () => {
      expect(comp).toBeTruthy;
    });
    
    it('Should display default Openmrs server url', () => {
      fixture.autoDetectChanges();
      expect(debugElement.nativeElement.textContent).toContain(comp.serverUrls[0]);
    });
  });  
}
