
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
	if (wScroll > 1030 ){
		$('.skillT').addClass('sktShow');
	}
	if (wScroll > 1090 ){
		$('.skillTitle').addClass('sktShow');
	}
	if (wScroll > 1110 ){
		$('.skillTitle1').addClass('sktShow');
	}
	if (wScroll > 1150 ){
		$('.skillTitle2').addClass('sktShow');
	}
	if (wScroll > 1160 ){
		$('.skillTitle3').addClass('sktShow');
	}
	if (wScroll > 1400 ){
		$('.experienceCard').addClass('expShow');
	}
	if (wScroll > 2500 ){
		$('#c1').addClass('cShow');
	}
	if (wScroll > 2600 ){
		$('#c2').addClass('cShow');
	}
	if (wScroll > 2600 ){
		$('#c3').addClass('cShow');
	}
	if (wScroll > 2600 ){
		$('#c4').addClass('cShow');
	}
	if (wScroll > 2500 ){
		$('#c5').addClass('cShow');
	}
	if (wScroll > 2400 ){
		$('#c6').addClass('cShow');
	}
	if (wScroll > 2600 ){
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
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	// Education 
	if (wScroll > $('.education').offset().top - 250) {
		$('.school').each(function(a) {
			setTimeout(function() {
			$('.school').eq(a).addClass('muncul');
			},300 * (a+1));
		});
		//
	}





	//portfolio
	var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: false,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

});















