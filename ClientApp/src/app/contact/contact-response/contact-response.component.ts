import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-response',
  templateUrl: './contact-response.component.html',
  styleUrls: ['./contact-response.component.css']
})
export class ContactResponseComponent implements OnInit {

  isLoading: boolean = true;

  constructor(public dialogRef: MatDialogRef<ContactResponseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact) { }

ngOnInit() {
  setTimeout(()=>{              
    this.isLoading = false;
}, 2000);
}

onOkClick(): void {
  this.dialogRef.close();
}

}

