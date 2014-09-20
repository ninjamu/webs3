$(document).ready(function(){
	$('.img img:gt(0)').hide();
	setInterval(function(){
		$('.img :first-child').fadeOut()
		.next('img').fadeIn()
		.end().appendTo('.img');
	},4000);
	$('.cola').hover(function(){
		$('.text').animate({
			opacity:'toggle'
		})
	})
})