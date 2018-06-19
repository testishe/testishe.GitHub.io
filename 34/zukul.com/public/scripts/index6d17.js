
// Zukul.TRADE

var onloadCallback = function() {
    grecaptcha.render(document.querySelectorAll('.g-recaptcha')[0], { 'sitekey' : '6LfONU0UAAAAAA3aen0kvVnkodGQ3H4wub8DVkKL' });
    grecaptcha.render(document.querySelectorAll('.g-recaptcha')[1], { 'sitekey' : '6LfONU0UAAAAAA3aen0kvVnkodGQ3H4wub8DVkKL' });
};

function alert(v, text, then) {
    swal({
        'title': v + ' <img src="/public/images/smile.png">',
        'text': text,
        confirmButtonColor: '#7EcE54',
        icon: '/public/images/logo.png'
    }).then(then);
}

//externalRemoteInvalidHandler();

var paymentBox = {
    address: false,
    amount: false,
    checkPayment: function(){
        $.ajax({
            type: 'POST',
            url: '/checkBtcPayment',
            data: {
                'address': paymentBox.address,
                'amount': paymentBox.amount
            },
            dataType: "json",
            success: function(r) {
                if (r.success) {
                    clearInterval(paymentBox.ajaxInterval);
                    alert('Congratulations!', 'We have just seen your payment on the network and allow you to log in while your payment is being confirmed!', function(){
                        location.href = '/trading/gettingStarted';
                    });
                }
            }
        });
    },
    checkPayments: function() {
        paymentBox.checkPayment();
        this.ajaxInterval = setInterval(paymentBox.checkPayment, 3000);
    },
    show: function(amount, address) {

        this.address = address;
        this.amount  = amount;

        if (this.ajaxInterval) {
            clearInterval(this.ajaxInterval);
        }

        $('#signUp').modal('show');
        $('#signUp .modal-body.prel-lg').hide();
        $('#signUp .modal-dialog').addClass('wide700');
        $('#signUp .modal-header, #signUp .modal-body, #signUp .modal-footer').hide();
        $('#signUp .btc-payment-box .reg-payment-amount').html(amount);
        $('#signUp .btc-payment-box #bitcoinAddress').html(address);
        $('#signUp #btc-qr img').attr('src', '/index/qr/address/' + address + '/amount/' + amount);
        $('#signUp .btc-payment-box').fadeIn();
    },
    ajaxInterval: null
}

$(function () {
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    });

    // Page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 50
        }, 500);
        event.preventDefault();
        $("#navbar").collapse('hide');
    });

    $('form#signupform').validate({
        validClass: 'bgray',
        errorPlacement: function(error, element) {
            element.addClass('bred');
            var offset  = element.offset();
            error.css('left', element.outerWidth() + 30);
            error.css('top', offset.top - 85);
            error.addClass('bserror');
            error.appendTo(element.parent());
        },
        rules: {
            email: {
                // remote: '/index/checkEmail'
            },
            password: {
                minlength: 6
            },
            password2: {
                minlength: 6,
                equalTo: "#password1"
            }
        },
        messages: {
            email: {
                remote: 'This email address is already registered'
            },
            password: {
                minlength: 'Password must be at least 6 characters long'
            },
            password2: {
                minlength: 'Password must be at least 6 characters long',
                equalTo: 'Passwords must match one another'
            }
        }
    });

    $('#signUp').on('show.bs.modal', function (e) {
        $('#signUp .modal-header, #signUp .modal-footer').show();
        $('#signUp .modal-body').hide();
        $('#signUp .modal-dialog').removeClass('wide700');
        $('#signUp .modal-body:first').fadeIn();
    });

    $('#signUp .modal-footer button#create-account-btn').click(function() {
        if ($('#signupform').valid() ) {
            $('#signUp .modal-footer').hide();
            $('#signUp .modal-body:first').hide();
            $('#signUp .modal-body.policy').fadeIn();
        }
    });


    $('.policy input[type="checkbox"]').on('change', function() {
        if ($('.policy input[type="checkbox"]:checked').length == $('.policy input[type="checkbox"]').length) {
            $('#signUp .modal-header, #signUp .modal-body, #signUp .modal-footer').hide();
            $('#signUp .modal-body.prel-lg').show();

            paymentBox.show(0.12345678, '3HWyg1C3adz221pPgve8cwuPt8N3uUv3nJ');

            $.ajax({
                type: 'POST',
                url: '/requestBitcoinAddress',
                data: $('#signupform').serialize(),
                dataType: "json",
                success: function(r) {
                    if (r.success) {
                        paymentBox.show(r.amount, r.address);
                    } else {
                        alert('Registration error!', r.msg ? r.msg : 'Please try again!');
                        $('#signUp').modal('hide');
                    }
                }
            });
        }
    });

    if (location.href.indexOf('#login') > 0) {
        $('.modal#loginModal').modal('show');
        if (2 == location.href.split('&email=').length) {
            $('#loginEmail').val(decodeURIComponent(location.href.split('&email=')[1]));
        }
    }
    if (location.href.indexOf('#signUp') > 0) {
        $('.modal#signUp').modal('show');
    }

    if (location.href.indexOf('#paymentBox') > 0) {
        $('.modal#signUp').modal('show');
    }

//    $('.modal#signUp').modal('show');
//    paymentBox.show(0.12345678, '3HWyg1C3adz221pPgve8cwuPt8N3uUv3nJ');


    $('.packago').click(function(e){
        e.preventDefault();

        $('.modal#signUp #packageId').val($(this).data('package-id'));
        $('.modal#signUp').modal('show');

        return false;
    });

    $('form#loginform').validate({
        validClass: 'bgray',
        errorPlacement: function(error, element) {
            element.addClass('bred');
            var offset  = element.offset();
            error.css('left', element.outerWidth() + 30);
            error.css('top', offset.top - 85);
            error.addClass('bserror');
            error.appendTo(element.parent());
        }
    });

    $('form#loginform').submit(function(e){
        e.preventDefault();
        if (1 || $('#loginform textarea[name="g-recaptcha-response"]').val()) {
            $('#loginform .modal-footer > button').hide();
            $('#loginform .modal-footer > .prel').css('display', 'inline-block');
            $.ajax({
                type: 'POST',
                url: '/',
                data: $(this).serialize(),
                dataType: "json",
                success: function(r) {
                    if (r.success) {
//                        $('#loginform')[0].reset();
//                        $('#loginModal').modal('hide');
                        location.href = '/trading/index';
                    } else {
                        alert('Invalid login!', r.error);
                        $('#loginform .modal-footer > button, #loginform .modal-footer > .prel').toggle();
                    }
                }
            });
        }
        return false;
    });

    $('form#forgotForm').validate({
        validClass: 'bgray',
        errorPlacement: function(error, element) {
            element.addClass('bred');
            var offset  = element.offset();
            error.css('left', element.outerWidth() + 30);
            error.css('top', offset.top - 85);
            error.addClass('bserror');
            error.appendTo(element.parent());
        }
    });

    $('form#forgotForm').submit(function(e){
        e.preventDefault();
        if ($('#forgotForm').valid()) {
            $('#forgotForm .modal-footer > button').hide();
            $('#forgotForm .modal-footer > .prel').css('display', 'inline-block');
            $.ajax({
                type: 'POST',
                url: '/index/forgot',
                data: $(this).serialize(),
                dataType: "json",
                success: function(r) {
                    if (r.success) {
                        $('#forgotForm')[0].reset();
                        $('#forgotPassword').modal('hide');
                        $('#loginModal').modal('show');
                        alert('Please check your email', 'We have sent you instructions about resetting your password!');
                    } else {
                        alert('Something went wrong... error!', 'We were unable to find specified email address in our records..');
                    }
                    $('#forgotForm .modal-footer > *').toggle();
                }
            });
        }
        return false;
    });

    $('.cc-cookie-accept').click(function(){
        $.ajax({
            url: '/index/acceptCookies',
            dataType: "json"
        });
        $('.cc-cookies').remove();
    });
});

