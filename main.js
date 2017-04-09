$(function() {
	var navigasi = $('nav').offset().top;
	var sticky = function(){
		var scrolltop = $(window).scrollTop();

		if (scrolltop > navigasi) 
		{
			$('nav').addClass('fixed');
		}else
		{
			$('nav').removeClass('fixed');
		}
	};
	sticky();
	$(window).scroll(function(){
		sticky();
	})
})
