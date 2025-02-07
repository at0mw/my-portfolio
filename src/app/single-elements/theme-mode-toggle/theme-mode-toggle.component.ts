import {Component} from '@angular/core';
import {UiThemeService} from "../../../protocol/services/ui-theme-observer.service";
import {AsyncPipe, NgClass} from "@angular/common";

@Component({
  selector: 'atom-theme-mode-toggle',
  imports: [
    NgClass,
    AsyncPipe
  ],
  templateUrl: './theme-mode-toggle.component.html',
  styleUrl: './theme-mode-toggle.component.scss'
})
export class ThemeModeToggleComponent {
  darkMode$ = this.uiThemeService.themeMode$;
  themeModeToggled: boolean = false;
  themeTogglePressedTimeout: any;

  constructor(private uiThemeService: UiThemeService) {

  }


  onLightDarkModeToggle(state: boolean) {
    this.themeModeToggled = true;
    clearTimeout(this.themeTogglePressedTimeout);
    this.themeTogglePressedTimeout = setTimeout(() => {
      this.themeModeToggled = false;
    }, 1000);
    if (state) {
      this.uiThemeService.setThemeMode('dark');
    } else {
      this.uiThemeService.setThemeMode('light');
    }
  }

}
