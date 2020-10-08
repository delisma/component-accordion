# Hydrogen: accordion

Hydrogen's components are built using [Gulp](https://gulpjs.com/), [Sass](https://sass-lang.com), [Autoprefixer](https://github.com/postcss/autoprefixer), and [CSSnano](https://cssnano.co/).

Hydrogen components require [Cash](https://kenwheeler.github.io/cash/) to work properly. Cash is a lightweight jQuery alternative and will eventually be phased out of Hydrogen in favour of vanilla JavaScript.

This component module contains the following in the `dist` folder:
- the component's code that is imported by `@hydrogen-design-system/system`
- a versioned, isolated copy of the component that can be used independently of the system, either imported by a Sass project, or pulled as compiled CSS

This component currently supports the following markup and/or frameworks:
- HTML
- [Twig](https://twig.symfony.com/)

**Please ensure that work on this component updates all supported markup where possible.**

## Contributing

The code for this component can be found in:
- `src/markup/`
- `src/scripts/`
- `src/styles/`

You will need:
- [Node](https://nodejs.org/en/)

### Important Commands
- `npm install`
  - installs all development dependencies
- `npm run dev`
  - builds the versioned instance of the component and opens the test file in your browser with browser-sync running so that you can moderate your changes
- `npm run build`
  - runs the build command to process all files for production
  - this will automatically build the system and instanced versions of the component
- `npm publish`
  - builds the component
  - publishes it to the public package repository

## Twig Support

You can import Hydrogen's accordion component into your [Twig](https://twig.symfony.com/) enabled project using the following:

```
{% include "PATH-TO-PACKAGE-OR-CUSTOM-COMPONENT/accordion.twig" with {
    enabled: true,
    state: "closed",
    orientation: "left",
    expandIcon: "+",
    collapseIcon: "-",
    title: "",
    subtitle: "",
    content: [],
    classes: [],
    id: "",
    attributes: {
        accordion: [],
        trigger: [],
        expandIcon: [],
        collapseIcon: [],
        triggerTitle: [],
        triggerSubtitle: [],
        content: []
    }
} %}
```