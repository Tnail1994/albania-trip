import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCard, MatCardContent, MatCardSubtitle, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [MatSlideToggleModule,MatCard,MatCardContent, MatCardSubtitle, MatCardTitle],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent {

}
