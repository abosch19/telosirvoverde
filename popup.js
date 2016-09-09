$(document).ready(function (){
	$('.close-ad').on('click',function (){
		$('.pop-up').hide('slide', {
			direction: 'right'
		}, 500);
	});
	$('#next-step').on('click', function (){
		$('.ad').hide('slide', {
			direction: 'down'
		}, 500);
		setTimeout(function (){
			$('.email').show('slide', {
				direction: 'right'
			}, 500);
		}, 500);

	});

	$('.submit').on('click', function (){
		$('.pop-up.email input').hide();
		$('.pop-up.email h2').show();
		setTimeout(function () {
			$('.email').hide('slide', {
				direction: 'right'
			}, 500);
		}, 2000);
	});
});
