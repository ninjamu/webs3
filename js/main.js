$(document).ready(function(){
	$('.img img:gt(0)').hide();
	setInterval(function(){
		$('.img :first-child').fadeOut(2000)
		.next('img').fadeIn(2000)
		.end().appendTo('.img');
	},3000);
	$('.cola').hover(function(){
		$('.text').animate({
			opacity:'toggle'
		})
	})
})