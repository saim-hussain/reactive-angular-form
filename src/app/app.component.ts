import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = "Contact Us"; // Heading for the component

  // Define the form structure using FormBuilder
  profileForm = this.fb.group({
    firstname: ['', Validators.required], // Form control for first name with required validation
    lastname: ['', Validators.required],  // Form control for last name with required validation
    address: this.fb.group({              // Nested form group for address
      street: ['', Validators.required],  // Form control for street with required validation
      city: ['', Validators.required],    // Form control for city with required validation
      state: ['', Validators.required],   // Form control for state with required validation
      zip: ['', Validators.required]      // Form control for zip with required validation
    }),
    aliases: this.fb.array([              // Form array for aliases
      this.fb.control('')                 // Initial form control within the array
    ]),
  });

  // Inject FormBuilder through the constructor
  constructor(private fb: FormBuilder) {}

  // Method to handle form submission
  onsubmit() {
    console.warn(this.profileForm.value); // Log form value to the console
  }

  // Method to update form values
  updateprofile() {
    this.profileForm.patchValue({
      firstname: 'Nancy', // Update first name
      address: {
        street: '123 drew street' // Update street in the nested address form group
      }
    });
  }
}
