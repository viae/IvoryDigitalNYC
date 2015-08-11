/**
 * These are in charge of initializing YouTube
 */


function _vcRowGetAllElementsWithAttribute( attribute ) {
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++) {
        if (allElements[i].getAttribute(attribute)) {
            // Element exists with attribute. Add to array.
            matchingElements.push(allElements[i]);
        }
    }
    return matchingElements;
}


function _vcRowOnPlayerReady(event) {
    var player = event.target;
    player.playVideo();
    if ( player.isMute ) {
        player.mute();
    }

    player.loopInterval = setInterval(function() {
        if ( typeof player.loopTimeout !== 'undefined' ) {
            clearTimeout( player.loopTimeout );
        }

        var loopAdjustment = 0;
        if ( typeof jQuery(player.a).parent().attr('data-loop-adjustment') !== 'undefined' &&
             jQuery(player.a).parent().attr('data-loop-adjustment') !== '' &&
             jQuery(player.a).parent().attr('data-loop-adjustment') !== '0' ) {
            loopAdjustment = parseInt( jQuery(player.a).parent().attr('data-loop-adjustment') );
        }


        player.loopTimeout = setTimeout(function() {
            player.seekTo(0);
        }, player.getDuration() * 1000 - player.getCurrentTime() * 1000 - 60 - loopAdjustment );
    }, 400);
}

function _vcRowOnPlayerStateChange(event) {
    if ( event.data === YT.PlayerState.ENDED ) {
        if ( typeof event.target.loopTimeout !== 'undefined' ) {
            clearTimeout( event.target.loopTimeout );
        }
        event.target.seekTo(0);

	// Make the video visible when we start playing
    } else if ( event.data === YT.PlayerState.PLAYING ) {
		jQuery(event.target.getIframe()).parent().css('visibility', 'visible');
    }
}

function resizeVideo( $wrapper ) {
    var $videoContainer = $wrapper.parent();

    if ( $videoContainer.find('iframe').width() === null ) {
        setTimeout( function() {
            resizeVideo( $wrapper );
        }, 500);
        return;
    }

    var $videoWrapper = $wrapper;

    $videoWrapper.css({
        width: 'auto',
        height: 'auto',
        left: 'auto',
        top: 'auto'
    });

    $videoWrapper.css('position', 'absolute');

    var vidWidth = $videoContainer.find('iframe').width();
    var vidHeight = $videoContainer.find('iframe').height();
    var containerWidth = $videoContainer.width();
    var containerHeight = $videoContainer.height();

	var finalWidth;
	var finalHeight;
	var deltaWidth;
	var deltaHeight;

	var aspectRatio = '16:9';
	if ( typeof $wrapper.attr('data-video-aspect-ratio') !== 'undefined' ) {
		if ( $wrapper.attr('data-video-aspect-ratio').indexOf(':') !== -1 ) {
			aspectRatio = $wrapper.attr('data-video-aspect-ratio').split(':');
			aspectRatio[0] = parseFloat( aspectRatio[0] );
			aspectRatio[1] = parseFloat( aspectRatio[1] );
		}
	}

	finalHeight = containerHeight;
	finalWidth = aspectRatio[0] / aspectRatio[1] * containerHeight;

	deltaWidth = ( aspectRatio[0] / aspectRatio[1] * containerHeight ) - containerWidth;
	deltaHeight = ( containerWidth * aspectRatio[1] ) / aspectRatio[0] - containerHeight;

	if ( finalWidth >= containerWidth && finalHeight >= containerHeight ) {
		height = containerHeight;
		width = aspectRatio[0] / aspectRatio[1] * containerHeight
	} else {
		width = containerWidth;
		height = ( containerWidth * aspectRatio[1] ) / aspectRatio[0];
	}

	marginTop = - ( height - containerHeight ) / 2;
	marginLeft = - ( width - containerWidth ) / 2;

    $videoContainer.find('iframe').css({
        'width': width,
        'height': height,
        'marginLeft': marginLeft,
        'marginTop': marginTop
    });
}



var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    var videos = _vcRowGetAllElementsWithAttribute('data-youtube-video-id');

    for ( var i = 0; i < videos.length; i++ ) {
        var videoID = videos[i].getAttribute('data-youtube-video-id');

		// Get the elementID for the placeholder where we'll put in the video
        var elemID = '';
		for ( var k = 0; k < videos[i].childNodes.length; k++ ) {
			if ( /div/i.test(videos[i].childNodes[ k ].tagName ) ) {
				elemID = videos[i].childNodes[ k ].getAttribute('id');
				break;
			}
		}
		if ( elemID === '' ) {
			continue;
		}

        var mute = videos[i].getAttribute('data-mute');

        var player = new YT.Player(elemID, {
            height: 'auto',
            width: 'auto',
            videoId: videoID,
            playerVars: {
                autohide: 1,
                autoplay: 1,
                fs: 0,
                showinfo: 0,
                loop: 1,
                modestBranding: 1,
                start: 0,
                controls: 0,
                rel: 0,
                disablekb: 1,
                iv_load_policy: 3,
				wmode: 'transparent'
            },
            events: {
                'onReady': _vcRowOnPlayerReady,
                'onStateChange': _vcRowOnPlayerStateChange,
            }
        });
        player.isMute = mute === 'true';
    }
}



/**
 * Set up both YouTube and Vimeo videos
 */


jQuery(document).ready(function($) {

	/*
	 * Disable showing/rendering the parallax in the VC's frontend editor
	 */
	if ( $('body').hasClass('vc_editor') ) {
		return;
	}


	$('.bg-parallax.video, .gambit-bg-parallax.video').each(function() {
		$(this).prependTo( $(this).next().addClass('video') );
	});

    var $videoContainer = $('[data-youtube-video-id], [data-vimeo-video-id]').parent();
    $videoContainer.css('overflow', 'hidden');

    $('[data-youtube-video-id], [data-vimeo-video-id]').each(function() {
        var $this = $(this);
        setTimeout( function() {
            resizeVideo( $this );
        }, 100);
    });

    $(window).resize(function() {
        $('[data-youtube-video-id], [data-vimeo-video-id]').each(function() {
            var $this = $(this);
            setTimeout( function() {
                resizeVideo( $this );
            }, 2);
        });
    });

	// Hide Vimeo player, show it when we start playing the video
	$('[data-vimeo-video-id]').each(function() {
		var player = $f($(this).find('iframe')[0]);
		var $this = $(this);

	    player.addEvent('ready', function() {

			// mute
			if ( $this.attr('data-mute') === 'true' ) {
				player.api( 'setVolume', 0 );
			}

			// show the video after the player is loaded
			player.addEvent('playProgress', function onPlayProgress(data, id) {
				jQuery('#' + id).parent().css('visibility', 'visible');
			});
	    });
	});

    // When the player is ready, add listeners for pause, finish, and playProgress
});

