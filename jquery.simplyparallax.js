/**
 * The jQuery Simply Parallax is the simplest and easiest to use parallax
 * plugin. It is designed to require almost no configuration and no math.
 *
 * Elements with higher z-indexes scroll faster and elements with lower
 * indexes scroll slower.
 *
 * By default the element will be in "home" position relative to the parent
 * element when the parent element is at a Y position of 0 (at the top of
 * the page.
 *
 * Example usage:
 * $('.parallax').simplyParallax();
 *
 */
 
(function( $ ) {
  var $_targets = null;
  
  var maxIndex = 100;
  var maxSpeed = $(window).height()/100;
  
  function _setPosition( scrollTop, $target ) {
  
    // How many pixels need to be scrolled before the parent element is in position.
    var d = $target.parent().offset().top-scrollTop;
    
    // The z-index of the element
    // Positive is foreground and negative is background
    var z = $target.css('zIndex');
    
    // Pixels to move per actual pixel scrolled
    // Foreground elements move more than one pixel per actual pixel
    // Background elements move less than one pixel per actual pixel
    var o = z < 0 ? -d*(1+(z/maxIndex)) : d*(z/maxIndex*maxSpeed);
    
    $target.css('top', $target.data('origionalOffset')+o);
  }

  $(window).scroll(function(eventObject) {
	var scrollTop = $(document).scrollTop();

    $_targets.each(function() {
      _setPosition(scrollTop, $(this));
    });
  });

  $.fn.simplyParallax = function( options ) {
    var settings = $.extend( {
      'min'  : -1000,
      'max'  : 1000,
      'home' : 0
    }, options);

	!$_targets ? $_targets = this : $_targets.add(this);	
	
	var scrollTop = $(document).scrollTop();
	
    this.each(function() {
      $this = $(this);
      $this.data('origionalOffset', $this.position().top);
      _setPosition(scrollTop, $this);
      $this.css({ 'position':'absolute' });
    });

  };
})( jQuery );