import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {providePrimeNG} from "primeng/config";
import { primeNgToTokens } from '../styling/prime-ng/prime-ng-to-tokens';
import Aura from "@primeng/themes/aura";
import {definePreset} from "@primeng/themes";
import {provideAnimations} from "@angular/platform-browser/animations";

const bunitoPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{pink.50}',
      100: '{pink.100}',
      200: '{pink.200}',
      300: '{pink.300}',
      400: '{indigo.400}',
      500: '{pink.500}',
      600: '{pink.600}',
      700: '{pink.700}',
      800: '{pink.800}',
      900: '{pink.900}',
      950: '{pink.950}'
    }
  }
});


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: bunitoPreset,
        options: {
          ripple: true,
          darkModeSelector: '.atom-dark',
          prefix: 'atom-p',
        }
      }
    }),
  ]
};
