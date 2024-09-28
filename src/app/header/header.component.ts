import { Component } from '@angular/core';
import { HeaderButtonComponent } from '../header-button/header-button.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  public headerButtons = [
    { icon: 'favorite', text: 'Favorites', action: () => this.onFavoriteClick() },
    { icon: 'shopping_cart', text: 'Cart', action: () => this.onCartClick() },
    { icon: 'person', text: 'Profile', action: () => this.onProfileClick() },
    ];

  onFavoriteClick() {
    console.log('Favorite clicked');
    // Add your logic here
  }

  onCartClick() {
    console.log('Cart clicked');
    // Add your logic here
  }
  
  onProfileClick() {
    console.log('Profile clicked');
  }
  
  onHomeClick() {
    console.log('Home clicked');
  }    
}
