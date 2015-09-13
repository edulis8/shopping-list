$(document).ready(function() {
	

	$('ul').on('click', '.fa-minus-circle', function(){
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
  		$(this).parent().hide();
 
});


	$('ul').on('click', '.fa-check-circle', function(){
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
  		$(this).prev().toggleClass('strikeout');	
  		
});



	$("#addbutton").click(function() {

		var item = $('#item').val();

		$('ul').append("<li>"+item+"</li>");

		//$('ul').append("<li>"+$('input').val()+"</li>");

		console.log('Test');
	});


});