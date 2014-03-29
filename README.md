media-queries-loading
=====================

Prevents FOUC due to media query polyfills,
by providing classes to hide specified elements until media queries are loaded and parsed.

## Install

Via bower as `media-queries-loading`.

```sh
bower install --save media-queries-loading
```

## Usage

Example with Respond.js:

```html
<html class="no-js">
  <head>
    <link rel="stylesheet" type="text/css" href="dist/media-queries-loading.min.css" />
    <script>(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement)</script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  </head>
  <body>
    <div class="media-queries-loading-invisible">
      <!-- contents of this element will not be visible until media queries are loaded -->
    </div>
  </body>
</html>
```

Credit to Paul Irish for the [`.no-js` to `.js` trick](http://www.paulirish.com/2009/avoiding-the-fouc-v3/).

## LESS API

See `src/media-queries-loading-mixin.less`.
