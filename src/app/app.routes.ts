import { Routes } from '@angular/router';
import { ToursComponent } from './tours/tours.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: '/tours', pathMatch: 'full'},
    { path: 'home', component: ToursComponent},
    { path: 'tours', component: ToursComponent},    
    { path: 'favorites', component: FavoritesComponent},    
    { path: 'cart', component: CartComponent},    
    { path: 'profile', component: ProfileComponent},
];
