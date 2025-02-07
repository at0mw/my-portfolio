import {definePreset} from "@primeng/themes";
import Aura from "@primeng/themes/aura";

export const primeNgToTokens = definePreset(Aura, {
  semantic: {
    // font: {
    //   fontWeight: '400'
    // },
    formField: {
      // paddingX: '1rem',
      // paddingY: '1rem',
    },
    list: {
      padding: '0',
      option: {
        padding: '1rem'
      }
    },
    primary: {
       50: '{sys-color-surface-container}',
      100: '{sys-color-primary-container}',
      200: '#ff0000',
      300: '#ff0000',
      400: '#ff0000',
      500: '#ff0000',
      600: '#ff0000',
      700: '#ff0000',
      800: '#ff0000',
      900: '#ff0000',
      950: '#ff0000',
    },
    surface: {
       50: '#ff0000',
      100: '#ff0000',
      200: '#ff0000',
      300: '#ff0000',
      400: '#ff0000',
      500: '#ff0000',
      600: '#ff0000',
      700: '#ff0000',
      800: '#ff0000',
      900: '#ff0000',
      950: '#ff0000',
    },
    colorScheme: {
      light: {
        surface: {
          0: "{sys-color-surface}",
          50: "{sys-color-secondary-container}",
          100: "{sys-color-surface-container-high}",
          200: "{sys-color-surface-variant}",
          300: "{sys-color-secondary}",
          400: "{sys-color-primary}",
          500: "{sys-color-on-surface`}",
          600: "{sys-color-outline`}",
          700: "{sys-color-outline}",
          800: "{sys-color-on-surface}",
          900: "{sys-color-on-surface}",
          950: "{sys-color-on-surface}"
        },
        primary: {
          color: "{sys-color-primary}",
          contrastColor: "{sys-color-on-primary}",
          hoverColor: "{sys-color-outline}",
          activeColor: "{sys-color-primary}"
        },
        highlight: {
          background: "{sys-color-secondary-container}",
          focusBackground: "{sys-color-secondary}",
          color: "{sys-color-on-primary}",
          focusColor: "{sys-color-on-secondary}"
        },
        mask: {
          background: "rgba(0,0,0,0.4)",
          color: "red"
        },
        formField: {
          background: "{sys-color-surface-container}",
          disabledBackground: "{sys-color-surface-container-high}",
          filledBackground: "{sys-color-surface-container-high}",
          filledHoverBackground: "{surface.50}",
          filledFocusBackground: "{surface.50}",
          borderColor: "{sys-color-outline-variant}",
          hoverBorderColor: "{sys-color-primary}",
          focusBorderColor: "{sys-color-primary}",
          invalidBorderColor: "{sys-color-error}",
          color: "{sys-color-on-surface}",
          disabledColor: "{sys-color-error}",
          placeholderColor: "{sys-color-outline}",
          invalidPlaceholderColor: "{red.600}",
          floatLabelColor: "{sys-color-outline}",
          floatLabelFocusColor: "{sys-color-primary}",
          floatLabelActiveColor: "{sys-color-primary}",
          floatLabelInvalidColor: "{sys-color-error}",
          iconColor: "{sys-color-outline}",
          shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
        },
        text: {
          color: "{sys-color-on-surface}",
          hoverColor: "{sys-color-primary}",
          mutedColor: "{sys-color-outline}",
          hoverMutedColor: "{sys-color-primary}"
        },
        content: {
          background: "{sys-color-surface}",
          hoverBackground: "{sys-color-surface-container}",
          borderColor: "{sys-color-outline-variant}",
          color: "{sys-color-on-surface}",
          hoverColor: "{sys-color-primary}"
        },
        overlay: {
          select: {
            background: "{sys-color-surface}",
            borderColor: "{sys-color-outline-variant}",
            color: "red"
          },
          popover: {
            background: "{sys-color-surface}",
            borderColor: "{sys-color-outline-variant}",
            color: "{sys-color-on-surface}"
          },
          modal: {
            background: "{sys-color-surface}",
            borderColor: "{border-color-main}",
            color: "{sys-color-on-surface}"
          },
          // tooltip: {
          //   background: "red",
          // }
        },
        list: {
          option: {
            focusBackground: "{sys-color-outline-variant}",
            selectedBackground: "{sys-color-secondary-container}",
            selectedColor: "{sys-color-on-secondary-container}",
            selectedFocusBackground: "{sys-color-secondary-container}",
            selectedFocusColor: "{sys-color-on-secondary-container}",
            color: "{sys-color-on-surface}",
            focusColor: "{sys-color-on-surface}",
            icon: {
              color: "{sys-color-outline}",
              focusColor: "{sys-color-secondary}"
            }
          },
          optionGroup: {
            background: "transparent",
            color: "{text.muted.color}"
          }
        },
        navigation: {
          item: {
            focusBackground: "red",
            activeBackground: "red",
            color: "red",
            focusColor: "red",
            activeColor: "red",
            icon: {
              color: "{surface.400}",
              focusColor: "{surface.500}",
              activeColor: "{surface.500}"
            }
          },
          submenuLabel: {
            background: "transparent",
            color: "{text.muted.color}"
          },
          submenuIcon: {
            color: "{surface.400}",
            focusColor: "{surface.500}",
            activeColor: "{surface.500}"
          }
        },
        // tooltip: {
        //   background: "{sys-color-surface}",
        //   color: "{sys-color-on-surface}",
        //   // focusBackground: "{surface.0}",
        //   // focusColor: "{sys-color-on-surface}",
        //   // focusBorderColor: "{sys-color-outline-variant}",
        //   // focusShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
        // }
      },
    }
  }
});
