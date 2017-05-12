	$('.owl-carousel.owl-carousel--slider').owlCarousel({
		loop:false,
		margin: 0,
		nav: false,
		dots: true,
		autoWidth: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			}
		}
	})
	$('.owl-carousel.owl-carousel--slider2').owlCarousel({
		loop:false,
		margin: 20,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1,
				center: true,
				margin: 0
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			},
			1220: {
				items: 4
			}
		}
	})
	$('.owl-carousel.owl-carousel--slider3').owlCarousel({
		loop:false,
		margin: 20,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
				center: true,
				margin: 0
			},
			480: {
				items: 2
			},
			768: {
				items: 5
			}
		}
	})

	$('.owl-carousel.owl-carousel--banner').owlCarousel({
		autoplay: true,
		loop: true,
		center: true,
		margin: 0,
		nav: false,
		dots: false,
		autoplayTimeout: 3000,
		items: 1
	})