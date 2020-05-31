import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-template-blog',
  templateUrl: './template-blog.component.html',
  styleUrls: ['./template-blog.component.scss']
})
export class TemplateBlogComponent implements OnInit {

  constructor(public myapp: AppComponent) { }

  ngOnInit(): void {
  }

}
