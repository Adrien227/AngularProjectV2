import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopupFormComponent } from './../popup-form/popup-form.component';

export interface DialogData {
  description: string;
  corpsArticle: string;
}

@Component({
  selector: 'app-article1',
  templateUrl: './article1.component.html',
  styleUrls: ['./article1.component.scss']
})
export class Article1Component implements OnInit {

  // corpsArticle = '\"Soyez vous-même, les autres sont déjà pris\"  --Oscar Wilde';
  description = 'Citation d\' Oscar Wilde';

  constructor(public myapp: AppComponent, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  popup(){
    const dialogRef = this.dialog.open(PopupFormComponent, {
      width: '700px',
      data: {description: this.description, corpsArticle: this.myapp.corpsArticle}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.myapp.corpsArticle = result;
    });
  }

}


