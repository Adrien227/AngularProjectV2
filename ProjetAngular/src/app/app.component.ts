import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjetAngular';
  rubriqueActive = 'blognonconnecte';
  corpsArticle = '\"Soyez vous-même, les autres sont déjà pris\"  --Oscar Wilde'; // Pour la maquette

  connexion = false;

  affectation(element: string){
    if (element !== this.rubriqueActive) {
      this.rubriqueActive = element;
    }
  }

  isActive(element: string){
    if (element === this.rubriqueActive) {
      return true;
    } else {
      return false;
    }
  }
}
