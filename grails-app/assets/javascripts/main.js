$(document).ready(function(){
	setTimeout(function() {
    	$(".rapper-1").addClass("rapper-1-on");
    	$(".rapper-2").addClass("rapper-2-on");
	}, 2000);
	$('#tab-container').easytabs();
	$("#ronda2, #ronda3, #ronda4" ).datepicker();
	$( "#ronda1start" ).datepicker({
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 1,
		onClose: function( selectedDate ) {
			$( "#ronda1end" ).datepicker( "option", "minDate", selectedDate );
		}
	});
	$( "#ronda1end" ).datepicker({
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 1,
		onClose: function( selectedDate ) {
			$( "#ronda1start" ).datepicker( "option", "maxDate", selectedDate );
		}
	});
});



$('.competitor').hover(function () {
  	$(this).children(".vote_competitor").toggleClass("vote_competitor_on");
  	$(this).children(".play_competitor").toggleClass("play_competitor_on");
	$(".play_competitor_on").colorbox({inline:true, width:"70%"});
	$('.vote_competitor_on').click(function () {
			$(this).parent(".competitor").addClass("competitor_vote");
			$(this).siblings(".my_vote").addClass("my_vote_on");
			$(this).parent(".competitor").siblings(".competitor").addClass("competitor_not_vote");
	});
});
