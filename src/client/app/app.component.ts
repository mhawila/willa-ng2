import { Component } from '@angular/core';
import { Config } from './shared/index';
import { QuestionService } from './question.service';
import './operators';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  questions: any[];
  constructor(service: QuestionService) {
    console.log('Environment config', Config);
    this.questions = service.getQuestions();
  }
}
