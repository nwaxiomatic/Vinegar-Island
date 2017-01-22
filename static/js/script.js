var supportsAutoplay = false;
var waitTime;

$('#bg-video').vide({
	mp4: 'static/media/video/bg.mp4',
	poster: 'static/media/img/island.png',
}, {
	posterType: 'png',
	origin: 'content-box',
});
instance = $('#bg-video').data('vide');
video = instance.getVideoObject();
video.addEventListener('play', function () {
    supportsAutoplay = true;
});
setTimeout(          //wait for listener to run
    function(){
        if(supportsAutoplay){
        	video.onloadeddata = function(){
	$('.hidden').addClass('shown');
}
        }
        else {
        	$('.hidden').addClass('shown');
        }
    },
    waitTime
); 