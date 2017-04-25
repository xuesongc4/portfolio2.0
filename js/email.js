function send_email() {
    var data = {
        name: $('input[name="name"]').val(),
        email: $('input[name="email"]').val(),
        body: $('textarea').val()
    };
    $.ajax({
        url: 'mail_handler.php',
        method: 'POST',
        data: data,
        success: function (results) {
        }
    });
}