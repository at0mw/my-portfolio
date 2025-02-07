import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderBarComponent} from "../header-bar/header-bar.component";

@Component({
    selector: 'atom-core-ui',
    imports: [
        RouterOutlet,
        HeaderBarComponent
    ],
    templateUrl: './core-ui.component.html',
    styleUrl: './core-ui.component.scss'
})
export class CoreUiComponent {

}
