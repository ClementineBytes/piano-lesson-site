import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ContactResponseComponent } from './contact-response/contact-response.component';
import { Contact } from './contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;
  form: FormGroup;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      message: ['']
    })
  }

  onSubmit() {
    //TODO
    this.contact = new Contact();
    this.contact.name = this.form.get('name').value
    this.openDialog();
  }

  openDialog(): void { //temporary example
    const dialogRef = this.dialog.open(ContactResponseComponent, {
      width: '300px',
      data: this.contact
    });
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  // dialogRef.afterClosed().subscribe(result => {
  //   this.animal = result;
  // });

}