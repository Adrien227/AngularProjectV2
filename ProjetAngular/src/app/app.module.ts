import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './material-module';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { TemplateBlogComponent } from './template-blog/template-blog.component';
import { BlognonconnecteComponent } from './blognonconnecte/blognonconnecte.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Article1Component } from './article1/article1.component';
import { PopupFormComponent } from './popup-form/popup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutArticleComponent,
    TemplateBlogComponent,
    BlognonconnecteComponent,
    ConnexionComponent,
    Article1Component,
    PopupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // Déclare des composants pour la gestion des formulaires : https://angular.io/api/forms/FormsModule
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
