function send_email(e) {
    e.preventDefault();

    var message = $(".send-message");
    var email_flag=true;
    var name_flag=true;
    var message_flag=true;
    var data = {
        name: $('input[name="name"]').val(),
        email: $('input[name="email"]').val(),
        body: $('textarea').val()
    };

    loader("start");
    message.hide().empty();
    if(!data.email.includes("@")){
        message.show().append("- Email is not valid<br>");
        email_flag=false;
        loader("stop");
    }

    if(data.name.length < 2){
        message.show().append("- Name must be at least 2 characters<br>");
        name_flag=false;
        loader("stop");
    }
    if(data.body.length == 0){
        message.show().append("- Please send a message<br>");
        name_flag=false;
        loader("stop");
    }
    if(email_flag && name_flag && message_flag){
        $.ajax({
            url: 'mail_handler.php',
            method: 'POST',
            dataType: 'json',
            data: data,
            success: function (results) {
                if(results.success == true){
                    window.location.replace("/thankyou.html");
                    loader("stop");
                }
                else{
                    message.show().append(results.error);
                    loader("stop");
                }
            }
        });
    }
}

function loader(state){
    if(state == "start"){
        $(".loader").show();
        $(".send").hide();
    }
    else{
        $(".loader").hide();
        $(".send").show();
    }
}