

const revealOnScroll = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add class when it enters the view
        entry.target.classList.add('active');
      } else {
        // Remove class when it leaves the view (scrolling past it)
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.1 
  });

    document.querySelectorAll('.reveal-item-left').forEach((item) => {
    observer.observe(item);
  });
  document.querySelectorAll('.reveal-item-right').forEach((item) => {
    observer.observe(item);
  });
  document.querySelectorAll('.reveal-item-top').forEach((item) => {
    observer.observe(item);
  });
  document.querySelectorAll('.reveal-item-bottom').forEach((item) => {
    observer.observe(item);
  });

};

document.addEventListener('DOMContentLoaded', revealOnScroll);




tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-primary": "#ffffff",
                    "tertiary-fixed": "#e5e2df",
                    "secondary-fixed": "#ffdbd0",
                    "surface": "#fcf9f8",
                    "on-tertiary": "#ffffff",
                    "tertiary-fixed-dim": "#c8c6c3",
                    "inverse-surface": "#313030",
                    "primary-fixed": "#ffd8e9",
                    "on-tertiary-container": "#999795",
                    "tertiary": "#1b1b1a",
                    "surface-bright": "#fcf9f8",
                    "inverse-on-surface": "#f3f0ef",
                    "surface-dim": "#dcd9d9",
                    "on-tertiary-fixed-variant": "#474745",
                    "surface-container-highest": "#e5e2e1",
                    "primary": "#370826",
                    "surface-container-low": "#f6f3f2",
                    "outline": "#827379",
                    "on-error-container": "#93000a",
                    "error": "#ba1a1a",
                    "on-primary-fixed": "#370826",
                    "secondary-fixed-dim": "#ffb59f",
                    "tertiary-container": "#30302e",
                    "on-surface-variant": "#504349",
                    "on-surface": "#1c1b1b",
                    "primary-container": "#501e3c",
                    "error-container": "#ffdad6",
                    "background": "#fcf9f8",
                    "on-secondary-container": "#773622",
                    "inverse-primary": "#fab1d6",
                    "on-primary-container": "#c784a7",
                    "primary-fixed-dim": "#fab1d6",
                    "outline-variant": "#d4c2c9",
                    "secondary-container": "#fca287",
                    "surface-variant": "#e5e2e1",
                    "on-tertiary-fixed": "#1c1c1a",
                    "on-error": "#ffffff",
                    "on-secondary-fixed": "#3a0a00",
                    "surface-container": "#f0eded",
                    "surface-container-lowest": "#ffffff",
                    "on-primary-fixed-variant": "#6b3453",
                    "on-background": "#1c1b1b",
                    "surface-tint": "#864c6c",
                    "surface-container-high": "#eae7e7",
                    "secondary": "#914b35",
                    "on-secondary": "#ffffff",
                    "on-secondary-fixed-variant": "#743420"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "2xl": "1.5rem",
                    "3xl": "2.5rem",
                    "full": "9999px"
            },
            "spacing": {
                    "gutter": "24px",
                    "stack-md": "32px",
                    "container-padding": "40px",
                    "stack-sm": "16px",
                    "base": "8px",
                    "section-gap": "120px"
            },
            "fontFamily": {
                    "headline-md": ["Epilogue"],
                    "headline-xl": ["Epilogue"],
                    "body-lg": ["Be Vietnam Pro"],
                    "body-md": ["Be Vietnam Pro"],
                    "label-md": ["Be Vietnam Pro"],
                    "headline-lg": ["Epilogue"]
            },
            "fontSize": {
                    "headline-md": ["2rem", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "headline-xl": ["4.5rem", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-lg": ["1.125rem", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "body-md": ["1rem", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "label-md": ["0.875rem", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "headline-lg": ["3rem", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}]
            }
          },
        },
      }