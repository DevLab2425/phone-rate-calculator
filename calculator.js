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
		$('#cost').val( '$' + parseFloat(calculateRate($('#minutes').val())).toFixed(2) );
	});
});