import { Component } from '@angular/core';
import {UiFullScreenService} from "../../services/ui-fullscreen.service";

@Component({
  selector: 'atom-full-screen-toggle',
  imports: [],
  templateUrl: './full-screen-toggle.component.html',
  styleUrl: './full-screen-toggle.component.scss'
})
export class FullScreenToggleComponent {

  constructor(private uiFullscreenService: UiFullScreenService) {
  }

  onFullScreenToggle() {
    this.uiFullscreenService.toggleFullScreenState();
  }
}
