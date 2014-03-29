media-queries-loading
=====================

Prevents [FOUC][fouc] (flash of unstyled content) due to media query polyfills like [Respond.js][respond],
by providing classes to hide specified elements until media queries are loaded and parsed.

## Install

Via bower as `media-queries-loading`.

```sh
bower install --save media-queries-loading
```

## Usage

Example with [Respond.js][respond]:

```html
<html class="no-js">
  <head>
    <script>(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement)</script>
    <link rel="stylesheet" type="text/css" href="dist/media-queries-loading.min.css" />
    <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  </head>
  <body>
    <div class="media-queries-loading-invisible">
      <!-- contents of this element will have {visibility: hidden} until media queries are loaded -->
    </div>
    <div class="media-queries-loading-hidden">
      <!-- contents of this element will have {display: none} until media queries are loaded -->
    </div>
  </body>
</html>
```

Credit to Paul Irish for the [`.no-js` to `.js` trick](http://www.paulirish.com/2009/avoiding-the-fouc-v3/).

## LESS API

See `src/media-queries-loading-mixin.less`.

[fouc]: http://en.wikipedia.org/wiki/Flash_of_unstyled_content
[respond]: https://github.com/scottjehl/Respond
