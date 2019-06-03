
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
		$('#navbar').addClass('Show');
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
<<<<<<< HEAD
	}
	if ( wScroll > 1170 ){
		$('.adobecolor').addClass('skillShow');
	}
	if (wScroll > 1180 ){
		$('.p5color').addClass('skillShow');
	}
=======
	}
	if ( wScroll > 1170 ){
		$('.adobecolor').addClass('skillShow');
	}
	if (wScroll > 1180 ){
		$('.p5color').addClass('skillShow');
	}
>>>>>>> 9cd32c2dcd90a0015209b618c1b6389eba9fe551
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

	if (wScroll > 2150 ){
		$('#c1').addClass('cShow');
	}
	if (wScroll > 2160 ){
		$('#c2').addClass('cShow');
	}
	if (wScroll > 2180 ){
		$('#c3').addClass('cShow');
	}
	if (wScroll > 2150 ){
		$('#c4').addClass('cShow');
	}
	if (wScroll > 2180 ){
		$('#c5').addClass('cShow');
	}
	if (wScroll > 2180 ){
		$('#c6').addClass('cShow');
	}
	if (wScroll > 2160 ){
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





	//portfolio
	// var swiper = new Swiper('.swiper-container', {
 //      effect: 'coverflow',
 //      grabCursor: false,
 //      centeredSlides: true,
 //      slidesPerView: 'auto',
 //      coverflowEffect: {
 //        rotate: 50,
 //        stretch: 0,
 //        depth: 100,
 //        modifier: 1,
 //        slideShadows : true,
 //      },
 //      pagination: {
 //        el: '.swiper-pagination',
 //      },
 //    });

});

