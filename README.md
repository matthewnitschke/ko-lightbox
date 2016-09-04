# ko-lightbox
A lightweight basic knockout js component popup

# Installation
```html
<link rel="stylesheet" href="/path/to/ko-lightbox.css" />

<script src="/path/to/knockout.js"></script>
<script src="/path/to/ko-lightbox.js"></script>
```


#Usage
```html
<ko-lightbox params="{visible: isVisible}">
  <h1>This is a lightbox</h1>
</ko-lightbox>
```


#Options
These options are passed into the params on the component

| Option Key  | Default Value | Explination |
|-------------|---------------|-------------|
| closeButton | true          | Shows/Hides the close button |
| background  | '#FFF'        | The background color of the lightbox |
| viewModel   | null          | A view model for the lightbox |
| closeMethod | null          | A method that is run when the lightbox is closed |

## Options Example
```html
<ko-lightbox params="{visible: isVisible, closeButton: false, background: '#BBB'}">
  <div>I'm a lightbox!</div>
</ko-lightbox>
```

# Running the Demo
The demo file uses a [ko-component-page](https://github.com/matthewnitschke/ko-component-page) component to display each example. To run, first install dependencies
```
npm install
```
then open the demo file in chrome

