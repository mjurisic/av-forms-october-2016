import { Component, OnInit, Directive } from '@angular/core';
import { FormsModule, ReactiveFormsModule, AbstractControl, NG_VALIDATORS} from '@angular/forms';

function zipValidator(c: AbstractControl) {
  if (!c.value) return null;
  return c.value.match(/^\d{4}$/) ? null : {'zip': true};
}

@Directive({
  selector: '[zip-validator]',
  providers: [
    {provide: NG_VALIDATORS, multi: true, useValue: zipValidator}
  ]
})
export class ZipValidator {

}

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log('You submitted', value)
  }

}
