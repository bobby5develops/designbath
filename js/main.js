
$(document).ready(function(){ //executed function after the page has fully loaded;
	var checkHash,
	    lastHash = "";//store current URL hash in empty string;

	function checkHash(hash){//test for current hash parameter, and load content
		if (!hash) {
			hash = window.location.hash;//if no parameter is provided, use the hash value from current page
		}else if (hash != lastHash) {//if hash value has indeed changed, 
            lastHash = hash;//update current hash
            loadPage(hash);//load the new page associated with current hash
		};

	}
	checkHash();//check if the URL has a reference to a page and load it;
    
    function loadPage(){//load pages via ajax 

    }

	/*navigation accordion*/
	$("#accordion h3").click(function(){
		//slide up all link sub-menu lists
		$("#accordion ul ul").slideUp();
		//slide down the link list below the h3 clicked - only if its closed
		if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
		};
	})

	/*event listener for navigation menu hash change*/
	$("#accordion ul.list li ul li a")


}); 