//signup.js 
// add your JavaScript code to this file

//function that will be called when the
//document is ready for manipulation
$(function(){
	//document is now ready for manipulation

	//load state drop-down
	var i;
	var state;
	var option;
	var stateSelect = $('select[name="state"]');
	for (i = 0; i < usStates.length; i++) {
		state = usStates[i];
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		stateSelect.append(option);
	}//state drop-down loaded

	var reqField;       //reference to a required field
    var reqValue;       //the required field's value

    $('.signup-form').submit(function(){
    	//code to execute when the sign-up form is submitted
   		//this is the raw DOM form element
    	var signupForm = $(this);

    	//select a descendant input element with the name "addr-1"
    	var addr1Value = signupForm.find('input[name="addr-1"]').val();
    	if (addr1Value.length > 0) {
    		//address field has value
    		var zipValue = signupForm.find('input[name="zip"]').val();
    		if (zipValue.length == 0) {
    			//zip code field has no value
    			alert('You must also enter a zip code!');
    			return false;
    		}
    	}

    	var i;
    	var forms = ['input[name="first-name"]', 'input[name="last-name"]', 'input[name="email"]'];
    	for (i = 0; i < forms.length; i++) {
    		//find the input with name="first-name" and get its trimmed value
    		reqValue = signupForm.find(forms[i]).val().trim();
    		if (0 === reqValue.length) {
	        	//field has no value
	        	switch (i)
	        	{
	        		case 0:
	        			alert('You must enter a first name!');
	        			break;
	        		case 1:
	        			alert('You must enter a last name!');
	        			break;
	        		case 2:
	        			alert('You must enter an email!');
	        			break;
	        	}
        		return false;
    		}
    	}
    	
    });

	$('.cancel-signup').click(function() {
    	//code to run when user clicks "No Thanks!" button
    	//show the modal confirmation dialog
    	//and don't reset window.location until the user clicks
    	//the "Yes, Get Me Out of Here!" button
    	$('.cancel-signup-modal').modal();
    }); //cancel-signup click
    
    $('.btn-abandon').click(function(){
    	//user wants to leave page
    	window.location = 'http://www.google.com';
	});

	$('select[name="refer"]').change(function(){
	    //get a ref to the refer select
	    //add the refer-other input
	    var referSelect = $(this);
	    var otherInput = $('[name="refer-other"]');

	    //if the refer select's value in lower case is equal to "other"...
	    if ('other' === referSelect.val().toLowerCase()) {
	        //remove the disabled attribute from the
	        //refer-other input, show it, and set focus to it
	        otherInput.removeAttr('disabled');
	        otherInput.show();
	        otherInput.focus()
	    }
	    else {
	        //otherwise, make the refer-other input disabled
	        //and hide it
	        otherInput.attr('disabled', true);
	        otherInput.hide();
	    }
	}); //refer change function
});