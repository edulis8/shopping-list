$(document).ready(function() {
	

	$('ul').on('click', '.fa-minus-circle', function(){
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
  		$(this).parent().hide("explode");
 
});


	$('ul').on('click', '.fa-check-circle', function(){
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
  		$(this).prev().toggleClass('strikeout');	
  		
});

	var check = '<i class="fa fa-check-circle"></i>';
	var minus = '<i class="fa fa-minus-circle"></i>';


//when button is clicked, input value is posted

	$('#addbutton').click(function() {

		postItem();
	

	});


	$('input').keydown(function(enter) {

		
		if(enter.keyCode == 13){

			postItem();
		}
	});



	$('#reset').click(function(event) {
		
		$('.list').empty();
		$('.msg').hide();
	});

	$('#checkout').click(function(event) {
		$('.msg').hide();
		$('.list-container').append("<p class='msg'>Items will be delivered to your house by drone in 15 minutes. Total cost: $1,000.<br> <small>(Pay the drone. You do *not* want to piss off the drone.)</small></p>");
	});



	function postItem(){
		var valHasContent = $('#item').val();
		var item = "<span>"+$('#item').val()+"</span>";

		if(valHasContent){

		$('ul').prepend($('<li>'+item+check+" "+minus+'</li>').fadeIn('slow'));

		$('#item').val('');

		console.log('Test');
	}
}


});

//$('ul').append("<li>"+$('input').val()+"</li>");

