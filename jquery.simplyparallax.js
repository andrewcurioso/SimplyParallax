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
    var d = $target.parent().offset().top-scrollTop-$target.data('parallax-home');
    
    // The z-index of the element
    // Positive is foreground and negative is background
    var z = $target.css('zIndex');
    
    // Pixels to move per actual pixel scrolled
    // Foreground elements move more than one pixel per actual pixel
    // Background elements move less than one pixel per actual pixel
    var o = z < 0 ? -d*(1+(z/maxIndex)) : d*(z/maxIndex*maxSpeed);
    
    if ( $target.css('position') == 'relative' )
      $target.css('top', o);
    else
      $target.css('top', $target.data('parallax-origin')+o);
  }

  $(window).scroll(function(eventObject) {
	var scrollTop = $(document).scrollTop();

    $_targets.each(function() {
      _setPosition(scrollTop, $(this));
    });
  });

  $.fn.simplyParallax = function() {
  
	!$_targets ? $_targets = this : $_targets.add(this);	
	
	var scrollTop = $(document).scrollTop();
	
    this.each(function() {
      $this = $(this);
      $this.data('parallax-origin', $this.position().top);
      
      var home = $this.parent().attr("data-parallax-home");
      if ( home === undefined ) home = 0;
      if ( home === 'onload' ) home = $this.parent().position().top;
      
      $this.data('parallax-home', home);

      if ( $this.css('position') != 'absolute' )
        $this.css({ 'position':'relative' });

      _setPosition(scrollTop, $this);
      
    });

  };
})( jQuery );