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

/*  Mobile "hover"  */
$(document).ready(function() {
    $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
});


