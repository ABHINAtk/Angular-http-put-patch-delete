import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.css']
})
export class NewRecordComponent implements OnInit {
  newRecordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.newRecordForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.newRecordForm.valid) {
      const newUser = this.newRecordForm.value;
      this.userService.createUser(newUser).subscribe(
        response => {
          console.log('User created successfully:', response);
        },
        error => {
          console.error('Error creating user:', error);
        }
      );
    }
  }
}
