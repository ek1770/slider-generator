console.log('testing')

$(document).ready(function() {
	$('.slider-size').change(function() {
		console.log($(this).val());

		var sliderValue = $(this).val();

		$('.box').css('height', sliderValue * 5 + 'px');
		$('.box').css('width', sliderValue * 5 + 'px');

	}) /******-----Size slider------******/


	$('.slider-opacity').change(function() {
		console.log($(this).val());

		var sliderValue = $(this).val();

		$('.box').css('opacity', sliderValue);

	}) /******-----Opacity slider------******/


	$('.slider-border-radius').change(function() {
		console.log($(this).val());

		var sliderValue = $(this).val();

		$('.box').css('border-radius', sliderValue + 'px');

	}) /******-----Border radius slider------******/


	$('.slider-font').change(function() {
		console.log($(this).val());

		var sliderValue = $(this).val();

		if (sliderValue <= 1 || sliderValue >=3) {
			$('body').css('font-family', 'monospace');
		} else {
			$('body').css('font-family', 'arial');
		}

	}) /******-----Font slider------******/


	$('.slider-border').change(function() {
		console.log($(this).val());

		var sliderValue = $(this).val();

		$('.box').css('border-width', sliderValue + 'px');

	}) /******-----Border slider------******/


	$('.slider-colors').change(function() {
		console.log($(this).val());

		var sliderValue = $(this).val();

		if (sliderValue <= 1 || sliderValue >=3) {
			$('.format-title').css('color', 'white');
		} else {
			$('.format-title').css('color', 'green');
		}

		var sliderValue = $(this).val();

		if (sliderValue <= 1 || sliderValue >=3) {
			$('input[type=range]').css('background-color', 'lighter grey');
		} else {
			$('input[type=range]').css('background-color', 'orange');
		}

		var sliderValue = $(this).val();

		if (sliderValue <= 1 || sliderValue >=3) {
			$('.container-main').css('background-color', 'lighter grey');
		} else {
			$('.container-main').css('background-color', 'orange');
		}

	}) /******-----Color theme slider------******/



})