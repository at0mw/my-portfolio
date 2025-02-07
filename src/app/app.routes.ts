import {Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CoreUiComponent} from "./core/core-ui/core-ui.component";
import {BunitoPageComponent} from "./pages/bunito-page/bunito-page.component";

export const routes: Routes = [
  {path: '', redirectTo: '/bunito', pathMatch: 'full'},
  {
    path: 'portfolio',
    title: 'Portfolio',
    component: CoreUiComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', title: 'Home', component: HomePageComponent},
    ]
  },
  {path: 'bunito', title: 'Bunito', component: BunitoPageComponent},
];
