import { Component } from '@angular/core';
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'atom-love-button',
    imports: [
        AsyncPipe
    ],
  templateUrl: './love-button.component.html',
  styleUrl: './love-button.component.scss'
})
export class LoveButtonComponent {

}
