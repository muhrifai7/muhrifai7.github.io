
	$('.page-scroll').on('click', function(e){
		var href = $(this).attr('href');
		var elementHref = $(href);

		$('html, body').animate({
			scrollTop: elementHref.offset().top
		});

		e.preventDefault();

	});


// parallax

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	if (wScroll > 70 ){
		$('.navbar').addClass('Show');
	}

	if (wScroll > 100 ) {
		$('.aboutSlide').addClass('aShow');
	}
	if ( wScroll > 220 ) {
		$('.pkiri').addClass('pMuncul');
	}
	if ( wScroll > 260 ) {
		$('.pkiri1').addClass('pMuncul');
	}
	if ( wScroll > 300 ) {
		$('.pkiri2').addClass('pMuncul');
	}
	if ( wScroll > 340 ) {
		$('.pkiri3').addClass('pMuncul');
	}
	if ( wScroll > 380 ) {
		$('.pkiri4').addClass('pMuncul');
	}
	if ( wScroll > 420 ) {
		$('.pkiri5').addClass('pMuncul');
	}
	if (wScroll > 490 ){
		$('.eduSlide').addClass('eShow');
	}
	if (wScroll > 530 ){
		$('.eduSlide2').addClass('eShow');
	}

	// Skill
	if (wScroll > 1060 ){
		$('.progres').addClass('sktShow');
	}
	if (wScroll > 1090 ){
		$('.skillSlide').addClass('sktShow');
	}
	if (wScroll > 1110 ){
		$('.htmlcolor').addClass('skillShow');
	}
	if (wScroll > 1150 ){
		$('.csscolor').addClass('skillShow');
	}
	if (wScroll > 1160 ){
		$('.jscolor').addClass('skillShow');
	}
	if (wScroll > 1140 ){
		$('.phpcolor').addClass('skillShow');
	}
	if ( wScroll > 1170 ){
		$('.adobecolor').addClass('skillShow');
	}
	if (wScroll > 1180 ){
		$('.p5color').addClass('skillShow');
	}
	if (wScroll > 1150 ){
		$('.codeignitercolor').addClass('skillShow');
	}
	if (wScroll > 1140 ){
		$('.jqcolor').addClass('skillShow');
	}
	if (wScroll > 1140 ){
		$('.progres_value').addClass('skillShow');
	}
	//Experience

	if (wScroll > 1530 ){
		$('.experienceCard').addClass('expShow');
	}

	if (wScroll > 2100 ){
		$('#c1').addClass('cShow');
	}
	if (wScroll > 2100 ){
		$('#c2').addClass('cShow');
	}
	if (wScroll > 2100 ){
		$('#c3').addClass('cShow');
	}
	if (wScroll > 2100 ){
		$('#c4').addClass('cShow');
	}
	if (wScroll > 2100 ){
		$('#c5').addClass('cShow');
	}
	if (wScroll > 2100 ){
		$('#c6').addClass('cShow');
	}
	if (wScroll > 2100 ){
		$('#c7').addClass('cShow');
	}



	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});
	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});
	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1 +'%)'
	});

	// Education 
	if (wScroll > $('.education').offset().top - 450) {
		$('.school').each(function(a) {
			setTimeout(function() {
			$('.school').eq(a).addClass('muncul');
			},300 * (a+1));
		});
		//
	}
});	

var sliderControl = document.querySelector(".slider-control");

// slides informations
var slides = document.querySelectorAll(".slide"),
    slidesLength = slides.length;

// slides array
var slidesArr = [].slice.call(slides);

// reverse array sorting
slidesArr = slidesArr.reverse();

// slide current
var slideCurrent = 0;

sliderControl.addEventListener("click", function(e){
  target = e.target;
  
  // get next button
  if(target.classList.contains("next")){

    next = e.target,
    prev = next.previousElementSibling,
    nextSlide = slidesArr[slideCurrent + 1],
    slide = slidesArr[slideCurrent];
    
    slide.classList.add("slide-on");
    slide.classList.remove("text-on");
    nextSlide.classList.add("text-on");
    
    slideCurrent += 1;
    
    if(slideCurrent > 0) {
      prev.classList.remove("disabled");
    }
    
    if(slideCurrent === slidesLength - 1){
      next.classList.add("disabled");
    }
  }
  
  // get prev button
  if(target.classList.contains("prev")){
    
    slideCurrent -= 1;
    
    prev = e.target,
    next = prev.nextElementSibling,
    prevSlide = slidesArr[slideCurrent + 1],
    slide = slidesArr[slideCurrent];
    
    prevSlide.classList.remove("text-on");
    slide.classList.remove("slide-on");
    slide.classList.add("text-on");
    
    if(slideCurrent === slidesLength - 2){
      next.classList.remove("disabled");
    }

    if(slideCurrent === 0){
      prev.classList.add("disabled");
    }
    
  }



});

