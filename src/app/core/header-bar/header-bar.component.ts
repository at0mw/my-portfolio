import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UiThemeService} from "../../../protocol/services/ui-theme-observer.service";
import {AsyncPipe, NgClass} from "@angular/common";
import {NavHamburgerButtonComponent} from "../../single-elements/nav-hamburger-button/nav-hamburger-button.component";

@Component({
  selector: 'atom-header-bar',
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe,
    NavHamburgerButtonComponent
  ],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.scss'
})
export class HeaderBarComponent {
  @Input() showMenu: boolean = false;
  @Output() hamburgerMenuAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  themeModeToggled: boolean = false;
  themeTogglePressedTimeout: any;
  darkMode$ = this.uiThemeService.themeMode$;
  constructor(private uiThemeService: UiThemeService) {

  }

  onHamburgerAction() {
    this.showMenu = true;
    this.hamburgerMenuAction.emit();
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

  clickedOverlay() {
    this.showMenu = false;
  }
}
