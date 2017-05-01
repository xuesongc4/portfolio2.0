function send_email(e) {
    e.preventDefault();
    var data = {
        name: $('input[name="name"]').val(),
        email: $('input[name="email"]').val(),
        body: $('textarea').val()
    };
    $.ajax({
        url: 'mail_handler.php',
        method: 'POST',
        dataType: 'json',
        data: data,
        success: function (results) {
            console.log(results);
            if(results.success == true){
                window.location.replace("/thankyou.html");
            }
            else{
                console.log("email was not sent")
            }
        }
    });
}