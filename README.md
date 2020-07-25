# Hydrogen: Accordion Component

Hydrogen's components are built using [Gulp](https://gulpjs.com/), [Sass](https://sass-lang.com), [Autoprefixer](https://github.com/postcss/autoprefixer), and [CSSnano](https://cssnano.co/).

This component module contains the following in the `dist` folder:
- the component's code that is imported by @hydrogen-design-system/system
- a versioned, isolated copy of the component that can be used independently of the system, either imported by a Sass project, or pulled as compiled CSS

This component currently supports the following markup and/or frameworks:
- raw HTML

* Please ensure that work on this component updates all supported markup where possible.

## Contributing

The core code for this component can be found in:
- dev/markup/
- dev/scripts/
- dev/styles/_component-accordion.scss

You will need:
- [Node](https://nodejs.org/en/)

To contribute:
- `git clone` this repository
- `npm install`
- `npm run test`