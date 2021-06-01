// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
"use strict";

var createAllErrors = function() {
  var form = document.querySelector("form"),
      errorList = $( "ul.errorMessages", form );

  var showAllErrorMessages = function() {
      errorList.empty();

      // Find all invalid fields within the form.
      var invalidFields = form.find( ":invalid" ).each( function( index, node ) {

          // Find the field's corresponding label
          var label = $( "label[for=" + node.id + "] "),
              // Opera incorrectly does not fill the validationMessage property.
              message = node.validationMessage || 'Invalid value.';

          errorList
              .show()
              .append( "<li><span>" + label.html() + "</span> " + message + "</li>" );
      });
  };

  // Support Safari
  form.on( "submit", function( event ) {
      if ( this.checkValidity && !this.checkValidity() ) {
          $( this ).find( ":invalid" ).first().focus();
          event.preventDefault();
      }
  });

  $( "input[type=submit], button:not([type=button])", form )
      .on( "click", showAllErrorMessages);

  $( "input", form ).on( "keypress", function( event ) {
      var type = $( this ).attr( "type" );
      if ( /date|email|month|number|search|tel|text|time|url|week/.test ( type )
        && event.keyCode == 13 ) {
          showAllErrorMessages();
      }
  });
};

$( "form" ).each( createAllErrors );