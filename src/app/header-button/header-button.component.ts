import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.css']
})

export class HeaderButtonComponent {
  @Input() icon: string = '';
  @Input() text: string = '';
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}