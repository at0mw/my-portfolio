import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CoreUiComponent} from "./core/core-ui/core-ui.component";

@Component({
  selector: 'atom-root',
  standalone: true,
  imports: [RouterOutlet, CoreUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
}
