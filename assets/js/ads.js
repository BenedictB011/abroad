$(function(){
    if ($('#sCHMntcredbL').length == 0) {
        $('#carouselAds').removeClass('d-flex');
        $('#carouselAds').addClass('d-none');
        $('#adsNote').removeClass('d-none');
    } else {
        $('#carouselAds').addClass('d-flex');
        $('#adsNote').addClass('d-none');
    }
});
