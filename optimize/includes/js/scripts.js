// Sub-featured thumbnail hover effect
jQuery(document).ready(function () {
	jQuery('#breadcrumb.home img.thumb').mouseover(function() {
		jQuery(this).stop().fadeTo(300, 0.5);
	});
	jQuery('#breadcrumb.home img.thumb').mouseout(function() {
		jQuery(this).stop().fadeTo(400, 1.0);
	});
});

// Sub-featured thumbnail hover effect
jQuery(document).ready(function () {
	jQuery('#featured.home .play').mouseover(function() {
		jQuery(this).stop().fadeTo(300, 1);
	});
	jQuery('#featured.home .play').mouseout(function() {
		jQuery(this).stop().fadeTo(400, 0.7);
	});
});

jQuery(document).ready(function () {
	jQuery('#portfolio .block img').mouseover(function() {
		jQuery(this).stop().fadeTo(300, 0.5);
	});
	jQuery('#portfolio .block img').mouseout(function() {
		jQuery(this).stop().fadeTo(400, 1.0);
	});
});

// Innerfade setup
jQuery(document).ready( function(){ 
	
	if ( jQuery('#twitter').length ) {
	
		fadeArgs = new Object();
		
		fadeArgs.fadeSpeed = woo_innerfade_settings.timeout;
		fadeArgs.crossfade = false;
		fadeArgs.container = 'twitter_container';
		fadeArgs.effect = 'fade';
		fadeArgs.autoHeight = true;
		fadeArgs.generatePagination = false;
		
		if ( woo_innerfade_settings.can_fade == 'true' ) {
			fadeArgs.play = woo_innerfade_settings.timeout;
		}
				
		jQuery( '#twitter' ).slides( fadeArgs );
	}

/*-----------------------------------------------------------------------------------*/
/* Innerfade Setup */
/*-----------------------------------------------------------------------------------*/

	if ( jQuery('.quotes').length ) {
	
		fadeArgs = new Object();
		
		fadeArgs.fadeSpeed = woo_innerfade_settings.timeout;
		fadeArgs.crossfade = false;
		fadeArgs.container = 'quotes';
		fadeArgs.effect = 'fade';
		fadeArgs.autoHeight = true;
		fadeArgs.generatePagination = false;
		
		if ( woo_innerfade_settings.can_fade == 'true' ) {
			fadeArgs.play = woo_innerfade_settings.timeout;
		}
				
		jQuery( '#testimonials' ).slides( fadeArgs );
	}
});

// Portfolio tag sorting
jQuery(document).ready(function(){
								
/*-----------------------------------------------------------------------------------*/
/* Portfolio tag toggle on page load, based on hash in URL */
/*-----------------------------------------------------------------------------------*/

	if ( jQuery( '.port-cat a' ).length ) {
		var currentHash = '';
		currentHash = window.location.hash;
		
		// If we have a hash, begin the logic.
		if ( currentHash != '' ) {
			currentHash = currentHash.replace( '#', '' );
			
			if ( jQuery( '#portfolio .' + currentHash ).length ) {
			
				// Select the appropriate item in the category menu.
				jQuery( '.port-cat a.current' ).removeClass( 'current' );
				jQuery( '.port-cat a[rel="' + currentHash + '"]' ).addClass( 'current' );
				
				// Show only the items we want to show.
				jQuery( '#portfolio .post' ).hide();
				jQuery( '#portfolio .' + currentHash ).fadeIn( 400 );
			
			}
		}

	}

	jQuery('.port-cat a').click(function(evt){
		var clicked_cat = jQuery(this).attr('rel');
		if(clicked_cat == 'all'){
			jQuery('#portfolio .post').hide().fadeIn(200);
		} else {
			jQuery('#portfolio .post').hide()
			jQuery('#portfolio .' + clicked_cat).fadeIn(400);
		 }
		//eq_heights();
		evt.preventDefault();
	})	

	// Thanks @johnturner, I owe you a beer!
	var postMaxHeight = 0;
	jQuery("#portfolio .post").each(function (i) {
		 var elHeight = jQuery(this).height();
		 if(parseInt(elHeight) > postMaxHeight){
			 postMaxHeight = parseInt(elHeight);
		 }
	});
	jQuery("#portfolio .post").each(function (i) {
		jQuery(this).css('height',postMaxHeight+'px');
	});
														
});
