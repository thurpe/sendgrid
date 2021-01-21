/* global base_url */
'use strict';
function multi_email() {

  
    $('#multi-response').html("Sending to <span id='curent-email'></span>");
    let emails = $('#emails').val();
    let subject = $('#subject').val();
    let message = $('#message').val();
    let sname = $('#sname').val();
    let spass = $('#spass').val();
    let fromemail = $('#fromemail').val();
    let fromname = $('#fromname').val();


    let path_uri = "sendgrid.php";


    let email = emails.split(',');



    $.ajax({
        type: "POST",
        url: path_uri,
        data: {
            sname: sname,
            spass: spass,
            fromemail: fromemail,
            fromname: fromname,
            emails: email_loop(email),
            subject: subject,
            message: message
        },
        success: function(data) {
            if (data == "success") {
                $('#multi-response').html("Successfully sent");

            } else {
                $('#multi-response').html(data);
            }
        }
    });
}

let i = 0;
function email_loop(emails) {
    let email = emails[i];
    $("#curent-email").html(email);
    if (++i < emails.length) {
        setTimeout(multi_email, 120);
    }

    return email;
}
