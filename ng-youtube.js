angular.module('ngYoutube', [])
.directive('youtube', function ($compile) {
	return {
		restrict: 'E',
		replace:true,
		template:"<div><div id='youtube'></div><div style='width:100%;height:100%;top:0;left:0;position:absolute;'></div>",
		link: function (scope, element, attrs) {

			element.css('width','100%');
			element.css('height','100%');

			var tag = document.createElement('script');
		    tag.src = "https://www.youtube.com/iframe_api";
		    var firstScriptTag = document.getElementsByTagName('script')[0];
		    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

			// element.append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+attrs.vid+'" frameborder="0" allowfullscreen></iframe>')
		
			var player;
		    window.onYouTubeIframeAPIReady = function() {
		        player = new YT.Player('youtube', {
		          height: '100%',
		          width: '100%',
		          videoId: attrs.vid,
		          playerVars: {
		          	loop : 1,
		          },
		          events: {
		            'onReady': onPlayerReady,
		            // 'onStateChange': onPlayerStateChange
		          }
		        });
		    }

		    function onPlayerReady(event) {

		    	player.seekTo(10);

		        event.target.playVideo();
		    }
		}
	};
})