import { Component, OnInit, Inject} from '@angular/core';
import { DialogData } from './../article1/article1.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-popup-form',
  templateUrl: 'popup-form.component.html',
  styleUrls: ['popup-form.component.scss']
})
export class PopupFormComponent {

  description =  new FormControl({ value: '', disabled: true }, [Validators.required]);
  corps =  new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<PopupFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    if (this.description.hasError('required') || this.corps.hasError('required') ) {
      console.log('Form pas OK');
    } else {
      this.dialogRef.close();
    }
  }

}


