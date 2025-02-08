import { Component } from '@angular/core';
import {Card} from "primeng/card";
import {ThemeModeToggleComponent} from "../../single-elements/theme-mode-toggle/theme-mode-toggle.component";
import {SpeedDial} from "primeng/speeddial";
import {LoveButtonComponent} from "../../single-elements/love-button/love-button.component";
import {FullScreenToggleComponent} from "../../single-elements/full-screen-toggle/full-screen-toggle.component";
import {ValentineFormComponent} from "../../bunito-page-components/valentine-form/valentine-form.component";

@Component({
  selector: 'atom-bunito-page',
  imports: [
    ThemeModeToggleComponent,
    SpeedDial,
    LoveButtonComponent,
    FullScreenToggleComponent,
    ValentineFormComponent
  ],
  templateUrl: './bunito-page.component.html',
  styleUrl: './bunito-page.component.scss'
})
export class BunitoPageComponent {
  speedDialItems: any[] = [
    {
      label: 'themeToggle',
    },
    {
      label: 'love',
    },
    {
      label: 'fullScreen',
    },
  ]
}
