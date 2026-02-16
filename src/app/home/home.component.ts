import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  title: string = 'Angular SPA Project';
  students: number = 1;
  isActive: boolean = true;

}
