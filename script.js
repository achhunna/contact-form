// On submit
function submit_form() {

    // Get form input values
    var name = $( '#name' ).val();
    var email = $( '#email' ).val();
    var to_email = $( '#to' ).val();
    var subject = $( '#subject' ).val();
    var message = $( '#message' ).val();

    // Check if receiver email is default
    if ( to_email === '' ) {
        to_email = "achhunna@gmail.com";
    }

    if ( verify_alphabet( name ) && verify_email( email ) && verify_email( to_email ) ) {

        // Check subject is blank
        if ( subject === '' ) {
            subject = "(No Subject)";
        }
        // Ajax
        $.ajax( {
            type: 'post',
            url: 'contact.php',
            data: 'name=' + name + '&email=' + email + '&to_email=' + to_email + '&subject=' + subject + '&message=' + message,
            success: function( data ) {
                if ( data ) {
                    show_output( 'Email sent successfully!' );
                }
            }
        } );

        clear_form();
    } else {

        if ( !verify_alphabet( name ) ) {
            show_output( 'Invalid Name' );
        } else {
            show_output( 'Invalid Email' );
        }

    }

    // Scroll to top
    $( 'html,body' ).animate( {
       scrollTop: $( 'form' ).offset().top
    } );
}

// Clear input boxes and uncheck checkbox
function clear_form() {
    var form_ids = [ 'name', 'email', 'to', 'subject', 'message' ];

    for ( id in form_ids ) {
        $( '#' + form_ids[ id ] ).val( '' );
    }

    $( '#custom_checkbox' ).prop( 'checked', false );
}

// Verify name
function verify_alphabet( name ) {
    var number_match = name.match( /\d+/g );
    if ( name === '' ) {
        return false;
    } else if ( number_match != null ) {
        return false;
    } else {
        return true;
    }
}

// Verify email
function verify_email( email ) {
    var email_regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if ( email.search( email_regex ) === -1 ) {
        return false;
    } else {
        return true;
    }
}

// Show output for brief time
function show_output( message ) {

    $( '.output' ).html( message );
    // Show output
    $( '.output' ).css( 'opacity', '1' );

    var hide = function () {
        $( '.output' ).css( 'opacity', '0' );
    }
    // Hide output after x secs
    setTimeout( hide, 2000 );
}

// Document ready execute
$( document ).ready( function () {

    // Disable to email field
    $( '#to' ).prop( 'disabled', true );

    $( '#custom_checkbox' ).click( function () {
        // Check if custom checkbox is clicked
        if ( $( '#custom_checkbox' ).is( ':checked' ) ) {
            $( '#to' ).prop( 'disabled', false ).focus().val( '' );
        } else {
            $( '#to' ).val( '' ).prop( 'disabled', true );
        }
    } );

} );
