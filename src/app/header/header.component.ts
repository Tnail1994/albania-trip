import { Component } from '@angular/core';
import { HeaderButtonComponent } from '../header-button/header-button.component'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  public headerButtons = [
    { icon: 'home', text: 'Home', action: () => this.onHomeClick() },
    { icon: 'favorite', text: 'Favorites', action: () => this.onFavoriteClick() },
    { icon: 'shopping_cart', text: 'Cart', action: () => this.onCartClick() },
    { icon: 'person', text: 'Profile', action: () => this.onProfileClick() },
    ];

  constructor(private router: Router){}

  onFavoriteClick() {
    console.log('Favorite clicked');
    this.router.navigate(['favorites']);  }

  onCartClick() {
    console.log('Cart clicked');
    this.router.navigate(['cart']);
  }
  
  onProfileClick() {
    console.log('Profile clicked');
    this.router.navigate(['profile']);
  }
  
  onHomeClick() {
    console.log('Home clicked');
    this.router.navigate(['home']);
  }    
}
