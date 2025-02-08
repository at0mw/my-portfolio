import { Component } from '@angular/core';
import {ThemeModeToggleComponent} from "../../single-elements/theme-mode-toggle/theme-mode-toggle.component";
import {SpeedDial} from "primeng/speeddial";
import {LoveButtonComponent} from "../../single-elements/love-button/love-button.component";
import {ValentineFormComponent} from "../../bunito-page-components/valentine-form/valentine-form.component";
import {GalleriaModule, GalleriaResponsiveOptions} from "primeng/galleria";

@Component({
  selector: 'atom-bunito-page',
  imports: [
    ThemeModeToggleComponent,
    SpeedDial,
    LoveButtonComponent,
    ValentineFormComponent,
    GalleriaModule
  ],
  templateUrl: './bunito-page.component.html',
  styleUrl: './bunito-page.component.scss'
})
export class BunitoPageComponent {
  showLove: boolean = false;
  responsiveOptions: GalleriaResponsiveOptions[] | undefined;
  images: any[] = [
    {
      src: 'assets/images/bunito/bunito-1.jpg',
      title: 'Bunito 1'
    },
    {
      src: 'assets/images/bunito/bunito-2.jpg',
      title: 'Bunito 2'
    },
    {
      src: 'assets/images/bunito/bunito-3.jpg',
      title: 'Bunito 3'
    },
    {
      src: 'assets/images/bunito/bunito-4.jpg',
      title: 'Bunito 4'
    },
    {
      src: 'assets/images/bunito/bunito-5.jpg',
      title: 'Bunito 5'
    },
    {
      src: 'assets/images/bunito/bunito-6.jpg',
      title: 'Bunito 6'
    },
  ]
  showScreenMask: boolean = false;
  speedDialItems: any[] = [
    {
      label: 'themeToggle',
    },
    {
      label: 'love',
    }
  ]

  onHideSpeedDial() {
    console.log('hide');
  }

  onShowSpeedDial() {
    this.showScreenMask = true;
  }

  onLoveButtonClick() {
    this.showLove = true;
  }

  onHideMask($event: MouseEvent) {
    const galleryContainer = document.querySelector('.gallery-container');
    if (!galleryContainer?.contains($event.target as Node)) {
      this.showScreenMask = false;
      this.showLove = false;
    }
  }
}
