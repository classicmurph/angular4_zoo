import { Component } from '@angular/core';
import { Animal } from './models/animal.models';
import { AnimalFormComponent} from './animal-form/animal-form.component';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>

  `,

  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
}
