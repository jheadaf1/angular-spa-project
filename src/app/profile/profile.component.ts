import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
  age: number;
  location: string;
  bio: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  user: User = {
    name: 'Jenssel Angelo',
    email: '20239174@s.ubaguio.edu',
    age: 21,
    location: 'Baguio City',
    bio: 'IT Student'
  };

}
