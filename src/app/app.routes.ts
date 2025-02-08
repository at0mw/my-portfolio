import {Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CoreUiComponent} from "./core/core-ui/core-ui.component";
import {BunitoPageComponent} from "./pages/bunito-page/bunito-page.component";
import {ValentineFormOneComponent} from "./bunito-page-components/valentine-form-one/valentine-form-one.component";
import {ValentineFormTwoComponent} from "./bunito-page-components/valentine-form-two/valentine-form-two.component";
import {
  ValentineFormThreeComponent
} from "./bunito-page-components/valentine-form-three/valentine-form-three.component";
import {ValentineFormFourComponent} from "./bunito-page-components/valentine-form-four/valentine-form-four.component";

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
  {
    path: 'bunito',
    title: 'Bunito',
    component: BunitoPageComponent,
  }
  // {
  //   path: 'bunito/completo',
  //   title: 'A Royal Invitation',
  //   component: BunitoPageComponent,
  // },
];
