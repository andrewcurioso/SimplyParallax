# Simply Parallax

## Background

Parallax is an effect where objects may be displaced or obscured depending on the angle of viewing. Many so called "parallax" libraries do not simulate parallax but instead redefine the term to use the scroll bar to represent time rather than the position of the eye relative to the project being viewed.  

Not only is this not parallax but it also makes the libraries much more complicated to use.

Simply Parallax is a tiny jQuery plugin that gets back to the basics. It does true parallax and that's it. No bells and whistles. But that doesn't mean you can't still do cool things with it.

## Usage

Position relative to the eye is defined by CSS Z-Index ranging from -100 to 100.

Anything with a negative Z-Index is further from the eye with -100 being the furthest.

Anything with a positive Z-Index is closer to the eye. With 100 being the closest.

Elements further away will move slower than the scrolling. Elements closer will move faster than the scrolling. Elements with 0 for a Z-Index move at the exact same speed as the scroll.

Once you set up you're Z-Index on any element that you want to use parallax scroll,
just invoke it like so:

```javascript
$('my-elements').simplyParallax();
```

You will need to include Simply Parallax and jQuery on your page:
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="/js/jquery.simplyparallax.js"></script>
```

Simple, right?

### Advanced Usage

By default elements will be in their "natural" position when their offset parent lines up with the top of the page. To change this, use the `data-parallax-home` attribute. The attribute may be either a number of the word "auto". The default is 0.

Setting it to "auto" means that when the page loads the elements will look like they are in their natural position but will be offset as the user scrolls. For example:

```html
<div data-parallax-home="auto">...</div>
```

Setting it to a positive integer means that the elements will be in their natural position when the parent is that many pixels from the top of the screen. For example, this code will make the contained elements look like they are in their natural position when the element is 40px from the top of the screen:

```html
<div data-parallax-home="40px">...</div>
```

## MIT License

Copyright (c) 2013 Andrew Curioso

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Credits

Please let me know if you are using Simply Parallax in your project. I'd love to hear from you!.
