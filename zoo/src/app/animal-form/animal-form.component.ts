import { Component } from '@angular/core'
import { Animal } from '../models/animal.models'

@Component({
	selector: 'animal-form',
	templateUrl: './animal-form.component.html'
})

export class AnimalFormComponent {
	classTypes = ['mammal', 'reptile', 'amphibian', 'bird', 'fish', 'unknown'];
	submitted = false;
	onSubmit() { this.submitted = true;
		console.log("Submitted") }
}