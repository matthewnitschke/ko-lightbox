# ko-popup
A lightweight basic knockout js component popup

# Installation
```html
<link rel="stylesheet" href="/path/to/ko-popup.css" />

<script src="/path/to/knockout.js"></script>
<script src="/path/to/ko-popup.js"></script>
```


#Usage
```html
<popup params="{visible: isVisible}">
  <h1>This is popup information</h1>
</popup>
```


#Options
There are currently two options you can pass into the component

| Option Key  | Default Value | Explination |
|-------------|---------------|-------------|
| closeButton | true          | Shows/Hides the close button |
| background  | '#FFF'        | The background color of the pop-up |
| viewModel   | null          | A view model for the lightbox |
| closeMethod | null          | A method that is run when the lightbox is closed |

## Example usage
```html
<popup params="{visible: isVisible, closeButton: false, background: '#BBB'}">
  <div>I'm a pop-up!</div>
</popup>
```

Please see the examples folder for more examples
