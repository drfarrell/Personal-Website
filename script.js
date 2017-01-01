
//3D positioning

window.addEventListener('mousemove', function(e){
	var hscreen 		= window.innerHeight;
	var wscreen 		= window.innerWidth;
	var posY 			= (e.pageY / hscreen * 100) - 50;
	var posX  			= (e.pageX / wscreen * 100) - 50;
    var translateY 	    = posY / 6;
	var translateX   	= posX / 6;
	var rotateX 		= posX / 6;
	var rotateY 		= posY / 6;
	var header			= document.querySelector('.transform3d');
	var title			= document.querySelector('.title');
	var titleDist   = title.getAttribute('data-distance');
	title.style.transform = 'translate(' + translateX*titleDist + 'px,' + translateY*titleDist + 'px) rotateX(' + rotateX/titleDist + 'deg) rotateY(' + rotateY/titleDist + 'deg)';
	title.style.textShadow = '' + (translateX*2)+ 'px ' + (translateY*2) + 'px' + ' 100px rgba(0,0,0,0.2)';	
}, false);


//Fading

$('body').bind('touchstart', function() {});

$(document).ready(function() {
$('body').css('display', 'none');
$('body').fadeIn(1500);

$('.link').click(function() {
event.preventDefault();
newLocation = this.href;
$('body').fadeOut(1200, newpage);
});
function newpage() {
window.location = newLocation;
}

});


$('anchor').on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
