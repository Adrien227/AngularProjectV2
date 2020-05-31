import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-blognonconnecte',
  templateUrl: './blognonconnecte.component.html',
  styleUrls: ['./blognonconnecte.component.scss']
})
export class BlognonconnecteComponent implements OnInit {

  constructor(public myapp: AppComponent) { }

  ngOnInit(): void {
  }

}
