import { Component } from '@angular/core';
import {UiThemeService} from "../../../protocol/services/ui-theme-observer.service";
import {AsyncPipe, NgClass} from "@angular/common";

@Component({
  selector: 'atom-header-bar',
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe
  ],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.scss'
})
export class HeaderBarComponent {
  themeModeToggled: boolean = false;
  themeTogglePressedTimeout: any;
  darkMode$ = this.uiThemeService.themeMode$;
  constructor(private uiThemeService: UiThemeService) {

  }

  onLightDarkModeToggle(state: boolean) {
    this.themeModeToggled = true;
    clearTimeout(this.themeTogglePressedTimeout);
    this.themeTogglePressedTimeout = setTimeout(() => {
      this.themeModeToggled = false;
    }, 1000);
    if(state) {
      this.uiThemeService.setThemeMode('dark');
    } else {
      this.uiThemeService.setThemeMode('light');
    }
  }
}
