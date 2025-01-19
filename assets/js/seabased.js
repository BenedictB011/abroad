/*sj-promotion.js*/
$(function() {
    var closeSeabased = getCookie("close-seabased");
    var header = $(".sj-alert");

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll > 0) {
            header.addClass("sj-scroll");
        } else {
            header.removeClass("sj-scroll");
        }
    });

    $("#close-seabased").click(function() {
        if (closeSeabased == '') {
            setCookie("close-seabased", true, 1);
        }
    });
});

$('#alert-sj').on('closed.bs.alert', function () {
    $('.ad-wrapper').addClass('ad-container-top');
    $('.ad-wrapper').removeClass('ad-container');
});
