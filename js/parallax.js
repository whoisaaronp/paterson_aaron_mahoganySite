//grad all of the parallax elements
var parallaxElements = document.querySelectorAll(
	'[data-parallax-offset]'
	);
// Define a funcition ot handle the parallax translations
function translateParallaxElements(){
	console.log('scrolling!');
	// create a scalar value based of the users scroll distance
	var currentScroll = window.pageYOffset;
	var totalScrollHeight = document.body.scrollHeight;
	var scrollScalar = currentScroll / totalScrollHeight;

	console.log(scrollScalar);

	// Loop over all the parallax elements scalar value of their offset
	parallaxElements.forEach(function(element){
		var parallaxOffset = element.getAttribute('data-parallax-offset');
		var actualOffset = parallaxOffset * scrollScalar;

		element.style.transform = 'translateY('+actualOffset+'px)';
	});

}
// Then bind the function to the window scroll event
window.addEventListener('scroll', translateParallaxElements);

// Thanks for/ the javascript help, #Kirks
// https://vimeo.com/309575777/e0c686d309