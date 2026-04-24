---
name: Hajjaj Tranquility
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#504349'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#827379'
  outline-variant: '#d4c2c9'
  surface-tint: '#864c6c'
  primary: '#370826'
  on-primary: '#ffffff'
  primary-container: '#501e3c'
  on-primary-container: '#c784a7'
  inverse-primary: '#fab1d6'
  secondary: '#914b35'
  on-secondary: '#ffffff'
  secondary-container: '#fca287'
  on-secondary-container: '#773622'
  tertiary: '#1b1b1a'
  on-tertiary: '#ffffff'
  tertiary-container: '#30302e'
  on-tertiary-container: '#999795'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd8e9'
  primary-fixed-dim: '#fab1d6'
  on-primary-fixed: '#370826'
  on-primary-fixed-variant: '#6b3453'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59f'
  on-secondary-fixed: '#3a0a00'
  on-secondary-fixed-variant: '#743420'
  tertiary-fixed: '#e5e2df'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1c1c1a'
  on-tertiary-fixed-variant: '#474745'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Epilogue
    fontSize: 4.5rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 3rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Epilogue
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  container-padding: 40px
  gutter: 24px
  stack-sm: 16px
  stack-md: 32px
---

## Brand & Style
The brand personality is rooted in serenity and intentionality. This design system serves an audience that values slow living, premium quality, and a "sanctuary" environment. The emotional response should be an immediate sense of calm and breathing room, achieved through an expansive use of white space and a "High-Minimalism" aesthetic.

The style is defined by soft structural elements, sophisticated editorial layouts, and a deliberate avoidance of clutter. It blends contemporary digital cleanliness with the tactile warmth of a high-end physical café experience.

## Colors
The palette is dominated by "Ivory Mist" (#F8F5F2), which acts as the primary canvas for all layouts, providing a warmer, more sophisticated alternative to pure white. 

- **Primary:** A deep, regal wine color used for high-impact call-to-actions and key brand moments.
- **Secondary:** A muted terracotta used for subtle accents, status indicators, or secondary iconography.
- **Neutral:** A soft off-black used for typography to ensure readability without the harshness of pure black.
- **Surface:** Occasional use of faint rose-tints (as seen in navigation backgrounds) to differentiate sections while maintaining the airy vibe.

## Typography
The typographic hierarchy relies on the contrast between the architectural, slightly "editorial" feel of **Epilogue** and the friendly, highly legible **Be Vietnam Pro**.

Headlines should be used with generous leading and tight letter-spacing to create a "locked-in" visual impact. Body text remains light and spacious, ensuring that even dense information feels approachable. Section labels and small descriptors should utilize the uppercase label style to provide clear navigation anchors without overwhelming the layout.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop (max-width 1440px) to maintain the carefully curated compositions seen in the reference. 

The spacing philosophy is "extreme breathing room." Vertical gaps between major sections should be significant (120px+) to allow the eye to rest. Elements within a card or container follow a strict 8px base unit, but the margins around the content should remain generous to prevent a "crowded" feel. Use asymmetrical layouts where images and text blocks are slightly offset to create a modern, dynamic rhythm.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Low-contrast outlines** rather than heavy shadows. 

1. **Surfaces:** Use subtle shifts from the ivory background to pure white containers to indicate interactable areas.
2. **Shadows:** When used, shadows must be extremely diffused (20-40px blur) with very low opacity (3-5%) and a slight tint of the primary wine color to keep them "warm."
3. **Glassmorphism:** Navigation bars may use a subtle backdrop blur (10px) with a semi-transparent ivory fill to maintain context of the content scrolling beneath.

## Shapes
The shape language is defined by "Soft-Geometric" forms. All containers, images, and buttons utilize a consistent 0.5rem (8px) to 1.5rem (24px) radius. 

Images should always be presented with rounded corners to soften the overall interface. Abstract decorative elements, like the star-burst container for the secondary product shots, can be used sparingly to break the grid and add a "hand-crafted" signature to the design.

## Components

- **Buttons:** Primary buttons are pill-shaped or rounded-xl with a solid deep wine background and white text. Secondary buttons use a ghost style with a 1px border in the secondary terracotta color.
- **Cards:** Cards should have no border, instead using a slightly different tonal background (e.g., pure white on ivory) or a very soft, ambient shadow.
- **Input Fields:** Use a minimal approach with only a bottom border or a very light-filled background, focusing on high-quality typography for the labels.
- **Chips/Tags:** Used for menu categories (e.g., "Beans," "Pastry"), these should be small, capitalized, and use a light tint of the secondary color for the background.
- **Imagery:** Product photography should be bright, high-contrast, and follow the same rounded corner rules as UI containers.
- **Icons:** Use thin-stroke, linear icons. Icons can be encased in a circular "badge" using the primary or secondary brand colors to indicate importance.