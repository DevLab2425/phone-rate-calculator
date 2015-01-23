(function($){
	$('document').ready(function(){
		function calculateRate(minutes){
			var FIRST_RATE = parseFloat($('#firstRate').val());
			var ADDITIONAL_RATE = parseFloat($('#additionalRate').val());
				
			minutes = parseInt(minutes);
		
			if(minutes <= 0){
				return 0;
			}

			return FIRST_RATE + ( ADDITIONAL_RATE * (minutes - 1) );
		}
		
		$('#calculateBtn').click(function(){
			var cost = parseFloat(calculateRate($('#minutes').val())) || 0;
			$('#cost').val( cost.toFixed(2) );
		});
	});
})(jQuery);