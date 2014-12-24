/*accordion*/
$(document).ready(function(){
	$("#accordion h3").click(function(){
		//slide up all link sub-menu lists
		$("#accordion ul ul").slideUp();
		//slide down the link list below the h3 clicked - only if its closed
		if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
		};
	})
})