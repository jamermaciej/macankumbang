const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click',function(){

	this.classList.toggle('open');
	nav.classList.toggle('open');

	if( this.classList.contains('open') ) {
		this.setAttribute('aria-expanded', 'true');
	} else {
		this.setAttribute('aria-expanded', 'false')
	}
	if( nav.classList.contains('open') ) {
		nav.setAttribute('aria-expanded', 'true');
	} else {
		nav.setAttribute('aria-expanded', 'false')
	}

},false);

$(document).ready(function(){
  $("#owl-testimonials").owlCarousel({
  	mouseDrag: false,
  	touchDrag: false,
    loop: true,
  	autoplay: true,
  	items: 1,
  	autoplayHoverPause: true,
    animateOut: 'slideOutUp',
  	animateIn: 'slideInUp'
  });
});
$(document).ready(function(){
  $("#owl-home").owlCarousel({
    loop: true,
  	autoplay: true,
  	items: 1
  });
});

$(function($) {
	$('a[href^="#"]').click(function (e) {
		e.preventDefault(); 
		var target = $(this).attr('href'); 
		$('body,html').animate({
			scrollTop: $(target).offset().top - 78, 
		}, 1000);
		//location.hash = target;
 		$('.nav-toggle').removeClass('open'); 
		$('.nav').removeClass('open'); 
	});
	$('.top').click(function (e) {
		$('body,html').animate({
			scrollTop: 0, 
		}, 1000);
	});
});


function createButton() {

    var button = document.createElement("button");

    button.classList.add("top", "hidden");
    button.innerHTML = '<i class="fa fa-angle-up" aria-hidden="true"></i>';
    document.body.appendChild(button);

    return button;

}

var button = createButton();

window.addEventListener("scroll", function(e) {

    if( (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) >= 550) {
        button.classList.remove("hidden");
    } else {
        button.classList.add("hidden");
    }

}, false);


const eye = document.querySelectorAll('.project__link');

eye.forEach(function(e){

	e.addEventListener("focusin", function(e){

	this.parentNode.classList.add('visible');
	this.parentNode.parentNode.classList.add('overlay');

	},false);
});

eye.forEach(function(e){

	e.addEventListener("focusout", function(){

	this.parentNode.classList.remove('visible');
	this.parentNode.parentNode.classList.remove('overlay');

	},false);
});






