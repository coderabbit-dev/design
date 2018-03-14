# CR Brand Colors
This project is forked from the incredible [Open Color](https://yeun.github.io/open-color)

## Available Colors

![available colors](https://yeun.github.io/open-color/asset/images/open-color.svg)

## Currently Supported Formats

css, sass, less, styl, json, svg, tex, oco(Open Color Tools), rcpx(PowerPaint), sketchpalette(Sketch), inkscape, aco, clr

## Variable Convention

### Sass, SCSS

```sass
$cr-(color)-(number)
```

### LESS

```less
@cr-(color)-(number)
```

### Stylus

```styl
cr-(color)-(number)
```
### CSS

```css
--cr-(color)-(number)
```

---

- `cr`:  Abbreviation for "Code Rabbit"
- `(color)`: Color name such as gray, red, lime, etc.
- `(number)`: 0 to 9. Brightness spectrum.

## How to Use

Import the file to your project and use the variables.

**Example for Sass, SCSS**

```sass
@import 'path/coderabbit-brand';

.body {
  background-color: $oc-gray-0;
  color: $oc-gray-7;
}

a {
  color: $oc-teal-7;

  &:hover,
  &:focus,
  &:active {
    color: $oc-indigo-7;
  }
}
```

**Example for LESS**

```less
@import 'path/open-color';

.body {
  background-color: @oc-gray-0;
  color: @oc-gray-7;
}

a {
  color: @oc-teal-7;

  &:hover,
  &:focus,
  &:active {
    color: @oc-indigo-7;
  }
}
```

**Example for Stylus**

```styl
@import 'path/open-color.styl'

.body
  background-color: oc-gray-0
  color: oc-gray-7

a
  color: oc-teal-7

  &:hover
  &:focus
  &:active
    color: oc-indigo-7
```

**Example for CSS**

```css
@import 'path/open-color.css';

.body {
  background-color: var(--cr-gray-0);
  color: var(--cr-gray-7);
}

a {
  color: var(--cr-teal-7);
}

a:hover,
a:focus,
a:active {
  color: var(--cr-indigo-7);
}
```

## Contribution

Check out the list below.

### Color Value

- `open-color.json` 
   - Change and `$ npm run compile-templates`
- `docs/asset/download/open-color_*.*.*.aco`
- `docs/asset/download/open-color_*.*.*.clr`
- Adobe library (admin rights)

### Version Number

- `package.json`
- `docs/asset/download/open-color_*.*.*.aco`
- Adobe library (admin rights)

### Document

- `README.md`
- `docs/documents.html`

### Introduction

- `README.md`
