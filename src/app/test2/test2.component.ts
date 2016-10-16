import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      firstName: '',
      lastName: ['', Validators.required],
      zip: ['', [Validators.required, this.zipValidator]]
    })
  }

  ngOnInit() {
  }


  zipValidator(c: AbstractControl) {
    if (!c.value) return null;
    return c.value.match(/^\d{4}$/) ? null : {'zip': true};
  }

  onSubmit(value) {
    console.log('You submitted', value)
  }


}
