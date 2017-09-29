import { Component } from '@angular/core'
import { Animal } from './animal'

@Component({
	selector: 'animal-form',
	templateUrl: './animal-form.component.html'
})

export class AnimalFormComponent {
	classTypes = ['mammal', 'reptile', 'amphibian', 'bird', 'fish', 'unknown'];
	model = new Animal(
		'', 0, 0, this.classTypes[0], '', '', 0
		);
	submitted = false;
	onSubmit() { this.submitted = true;
		console.log("Submitted") }
}