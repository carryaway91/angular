import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  /** TEMPLATE DRIVE FORMS APPROACH */
  @ViewChild('ttdForm') ttdForm: NgForm;

  defaultName: string = ''
  genderSelection: string = 'male';
  genders: string[] = ['male', 'female'];

  populate() {
    const defaultName = "Default name"
    this.ttdForm.form.patchValue({
      userData: {
        name: defaultName
      }
    })
  }
  onSubmit(form: NgForm) {
    console.log(form)
  }
  /** REACTIVE FORMS APPROACH */
  constructor(private fb: FormBuilder) {}
  reactiveForm: FormGroup
  ngOnInit(): void {
    /*this.reactiveForm = new FormGroup({
      'userDataReactive': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'gender': new FormControl(this.genders[0]),
      }),
      'hobbies': new FormArray([]),
      'passwords': new FormGroup({
        'password': new FormControl(null, [Validators.required, Validators.minLength(3)]),
        'confirm-reactive': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      })
    })*/
    /** cez form builder */
    this.reactiveForm = this.fb.group({
      userDataReactive: this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
        gender: [this.genderSelection, Validators.required],
      }),
        hobbies: this.fb.array([]),
        passwords: this.fb.group({
          password: '',
          confirm: ['']
      })
    })
  }
 

  passwordsDoNotMatchValidator() {
    if((<FormGroup>this.reactiveForm).get('passwords.password').value !== (<FormGroup>this.reactiveForm).get('passwords.confirm').value) {
      return true
    }
    return null
  }
  getControls() {
    // musime castnut typ aby sme mali pristup ku controls
    return (<FormArray>this.reactiveForm.get('hobbies')).controls;
  }
  
  addHobby() {
    if(this.getControls().length === 0 || this.getControls()[this.getControls().length - 1].value) {
      const control = new FormControl(null, Validators.required);
      (<FormArray>this.reactiveForm.get('hobbies')).push(control)
    }
  }
  onReactiveSubmit() {
    console.log(this.reactiveForm)
  }
}
